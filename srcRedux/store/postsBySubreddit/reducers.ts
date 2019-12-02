import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    FAIL_RECEIVE_POSTS,
    DELETE_POSTS,
} from './actions';

const initialStatePostsBySubreddit: PostsBySubredditState = {};
const initialStatePosts: PostsState = {
    isFetching: false,
    items: [],
    error: null,
    lastUpdated: 0,
};

const posts = (
    state = initialStatePosts,
    action: PostsActionTypes_I,
): PostsState => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_POSTS:
            return initialStatePosts;
        case FAIL_RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                lastUpdated: action.receivedAt,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts,
                error: null,
                lastUpdated: action.receivedAt,
            };
        default:
          return state;
      }
};

const postsBySubreddit = (
    state = initialStatePostsBySubreddit,
    action: PostsActionTypes_I,
): PostsBySubredditState => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case DELETE_POSTS:
        case FAIL_RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action),
            };
        default:
            return state;
    }
};

export default postsBySubreddit;
