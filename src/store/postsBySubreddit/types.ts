import actions from './actions';
import subreddits from '../actions/subreddits';

// =================
// ACTIONS
// =================
export interface RequestPostsAction {
    type: typeof actions.REQUEST_POSTS,
    subreddit: string,
}

export interface ReceivePostsAction {
    type: typeof actions.RECEIVE_POSTS,
    subreddit: string,
    posts: Array<any>,
    receivedAt: number,
}

export interface FailReceivePostsAction {
    type: typeof actions.FAIL_RECEIVE_POSTS,
    subreddit: string,
    error: Error,
    receivedAt: number,
}

export type PostsActionTypes_U = (RequestPostsAction | ReceivePostsAction | FailReceivePostsAction); // Union Types
export type PostsActionTypes_I = (RequestPostsAction & ReceivePostsAction & FailReceivePostsAction); // Intersection Types


// =================
// REDUCERS
// =================
export interface PostsBySubredditState {
    [subreddit: string]: PostsState,
}

export interface PostsState {
    isFetching: boolean,
    items: Array<any>,
    error: Error,
    lastUpdated: number,
}