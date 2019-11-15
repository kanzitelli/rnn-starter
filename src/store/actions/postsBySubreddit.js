import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,
} from './index';

const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});
  
const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now()
});

const failReceivePosts = (subreddit, error) => ({
    type: FAIL_RECEIVE_POSTS,
    subreddit,
    error,
    receivedAt: Date.now(),
})

export default {
    requestPosts,
    receivePosts,
    failReceivePosts,
}