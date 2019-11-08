import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_SUBREDDIT,
    ADD_SUBREDDIT,
} from './names';

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const addSubreddit = subreddit => ({
    type: ADD_SUBREDDIT,
    subreddit
})

export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});
  
export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now()
});

export const fetchPosts = subreddit => 
    dispatch => {
      dispatch(requestPosts(subreddit))
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }