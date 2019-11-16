import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,
} from './index';

export interface RequestPostsAction {
    type: typeof REQUEST_POSTS,
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

export type PostsActionTypes = RequestPostsAction | ReceivePostsAction | FailReceivePostsAction