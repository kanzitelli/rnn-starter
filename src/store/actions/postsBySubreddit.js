import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from './names';

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

const fetchPosts = subreddit => 
    dispatch => {
      dispatch(requestPosts(subreddit))
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }

export default {
    requestPosts,
    receivePosts,
    fetchPosts,
}