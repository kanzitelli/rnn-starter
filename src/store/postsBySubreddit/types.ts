import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,
    DELETE_POSTS,
} from './actions';

// =================
// ACTIONS
// =================
export interface RequestPostsAction {
    type: typeof REQUEST_POSTS,
    subreddit: string,
}

export interface DeletePostsAction {
    type: typeof DELETE_POSTS,
    subreddit: string,
}

export interface ReceivePostsAction {
    type: typeof RECEIVE_POSTS,
    subreddit: string,
    posts: Array<any>,
    receivedAt: number,
}

export interface FailReceivePostsAction {
    type: typeof FAIL_RECEIVE_POSTS,
    subreddit: string,
    error: Error,
    receivedAt: number,
}

export type PostsActionTypes_U = (RequestPostsAction | ReceivePostsAction | FailReceivePostsAction | DeletePostsAction); // Union Types
export type PostsActionTypes_I = (RequestPostsAction & ReceivePostsAction & FailReceivePostsAction & DeletePostsAction); // Intersection Types


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