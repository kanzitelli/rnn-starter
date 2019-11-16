import { call, put, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import { PostsActionTypes } from '../actions/types';

// MOVE THIS TO ANOTHER FILE, FOR ACTIONS ONLY
// interface IApiReddit {
//     type: string,
//     subreddit: string;
// }

async function fetchPostsApi(reddit: string) {
    const response = await fetch(`https://www.reddit.com/r/${reddit}.json`);
    return await response.json();
}

function* fetchPosts({ subreddit }: PostsActionTypes) {
    try {
        const json = yield call(fetchPostsApi, subreddit);
        yield put(actions.receivePosts(subreddit, json));
    } catch (e) {
        yield put(actions.failReceivePosts(subreddit, e));
    }
}

export default function* postsBySubreddit() {
    yield takeEvery<PostsActionTypes>(actions.requestPosts, fetchPosts);
}