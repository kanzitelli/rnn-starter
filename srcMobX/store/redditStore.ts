import { types, flow, applySnapshot, onSnapshot } from 'mobx-state-tree';
import AsyncStorage from '@react-native-community/async-storage';
import debounce from 'lodash/debounce';

const storageID = 'RedditStore';

async function fetchPostsApi(reddit: string) {
    const response = await fetch(`https://www.reddit.com/r/${reddit}.json`);
    return await response.json();
}

const Subreddit = types
    .model('Subreddit', {
        title: types.string,
    });

const SubredditPosts = types
    .model('SubredditPosts', {
        subreddit: types.identifier,
        isFetching: types.boolean,
        error: types.maybeNull(types.string),
        items: types.array(types.frozen()),
    })
    .actions((self) => {
        const fetchState = () => {
            self.error = null;
            self.isFetching = true;
        };

        const errorState = (e: string) => {
            self.error = e;
            self.isFetching = false;
        };

        const receiveState = (items: any) => {
            self.error = null;
            self.isFetching = false;
            self.items = items;
        };

        return {
            fetchState,
            errorState,
            receiveState,
        };
    });

const RedditStore = types
    .model('RedditStore', {
        selectedSubreddit: types.string,
        subreddits: types.array(Subreddit),
        postsBySubreddit: types.map(SubredditPosts),
    })
    .views((self) => ({
        get postsForSelectedSubreddit() {
            return self.postsBySubreddit.get(self.selectedSubreddit) ||
                { subreddit: self.selectedSubreddit, isFetching: false, error: null, items: [] };
        },
    }))
    .actions((self) => {
        const selectSubreddit = (subreddit: string) => {
            self.selectedSubreddit = subreddit;
        };

        const addSubreddit = (subreddit: string) => {
            // check on duplicates
            if (!self.subreddits.find((sr) => sr.title === subreddit)) {
                self.subreddits.push({ title: subreddit });
            }
        };
        const deleteSubreddit = (subreddit: string) => {
            const filtered = self.subreddits.filter((sr) => sr.title !== subreddit);
            self.subreddits = filtered as any;
        };

        const fetchSubredditPosts = flow(function*(subreddit: string = self.selectedSubreddit) {
            if (!self.postsBySubreddit.has(subreddit)) {
                self.postsBySubreddit.put({ subreddit, isFetching: false, error: null, items: [] });
            }

            self.postsBySubreddit.get(subreddit)!.fetchState();

            try {
                const json = yield fetchPostsApi(subreddit);
                const posts = json.data.children.map((child: any) => child.data);
                self.postsBySubreddit.get(subreddit)!.receiveState(posts);
            } catch (e) {
                self.postsBySubreddit.get(subreddit)!.errorState(e.toString());
            }

            return self.postsBySubreddit.get(subreddit)!.items.length;
        });
        const deleteSubredditPosts = (subreddit: string) => {
            self.postsBySubreddit.delete(subreddit);
        };

        const hydrate = () => {
            return flow(function*() {
                const data = yield AsyncStorage.getItem(storageID);
                if (data) {
                    applySnapshot(RedditStore, JSON.parse(data));
                }
            })();
        };

        return {
            selectSubreddit,

            addSubreddit,
            deleteSubreddit,

            fetchSubredditPosts,
            deleteSubredditPosts,

            hydrate,
        };
    })
    .create({
        selectedSubreddit: '',
        subreddits: [
            { title: 'mobx' },
            { title: 'reactjs' },
            { title: 'reactnative' },
            { title: 'golang' },
            { title: 'rust' },
        ],
        postsBySubreddit: {},
    });

// persisting the stores
onSnapshot(RedditStore, debounce(
    (snapshot) => AsyncStorage.setItem(storageID, JSON.stringify(snapshot)),
    1000,
));

export default RedditStore;
