import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,
} from './index';
import { PostsActionTypes } from './types';

const requestPosts = (subreddit: string): PostsActionTypes => ({
    type: REQUEST_POSTS,
    subreddit
});
  
const receivePosts = (subreddit: string, json: any): PostsActionTypes => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child: any) => child.data),
    receivedAt: Date.now()
});

const failReceivePosts = (subreddit: string, error: Error): PostsActionTypes => ({
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