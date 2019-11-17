import {
    RequestPostsAction,
    ReceivePostsAction,
    FailReceivePostsAction,
} from './types';

const REQUEST_POSTS = 'REQUEST_POSTS';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const FAIL_RECEIVE_POSTS = 'FAIL_RECEIVE_POSTS';

const requestPosts = (subreddit: string): RequestPostsAction => ({
    type: REQUEST_POSTS,
    subreddit
});
  
const receivePosts = (subreddit: string, json: any): ReceivePostsAction => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now()
});

const failReceivePosts = (subreddit: string, error: Error): FailReceivePostsAction => ({
    type: FAIL_RECEIVE_POSTS,
    subreddit,
    error,
    receivedAt: Date.now(),
});

export default {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,

    requestPosts,
    receivePosts,
    failReceivePosts,
}