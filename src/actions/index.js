import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_SUBREDDIT,
} from '../constants/ActionsNames';

export const selectSubreddit = (subreddit) => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const requestPosts = (subreddit) => ({
    type: REQUEST_POSTS,
    subreddit
});
  
export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now()
});