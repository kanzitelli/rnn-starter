export const REQUEST_POSTS = 'REQUEST_POSTS';
export const DELETE_POSTS = 'DELETE_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FAIL_RECEIVE_POSTS = 'FAIL_RECEIVE_POSTS';

export const requestPosts = (
    subreddit: string,
): RequestPostsAction => ({
    type: REQUEST_POSTS,
    subreddit,
});

export const deletePosts = (
    subreddit: string,
): DeletePostsAction => ({
    type: DELETE_POSTS,
    subreddit,
});

export const receivePosts = (
    subreddit: string,
    json: any,
): ReceivePostsAction => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now(),
});

export const failReceivePosts = (
    subreddit: string,
    error: Error,
): FailReceivePostsAction => ({
    type: FAIL_RECEIVE_POSTS,
    subreddit,
    error,
    receivedAt: Date.now(),
});
