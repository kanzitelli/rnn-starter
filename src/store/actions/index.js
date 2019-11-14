import selectedSubreddit from './selectedSubreddit';
import subreddits from './subreddits';
import postsBySubreddit from './postsBySubreddit';

export default {
    ...selectedSubreddit,
    ...subreddits,
    ...postsBySubreddit,
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const ADD_SUBREDDIT = 'ADD_SUBREDDIT';
export const DELETE_SUBREDDIT = 'DELETE_SUBREDDIT';