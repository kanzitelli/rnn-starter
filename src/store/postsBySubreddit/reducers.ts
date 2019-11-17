import actions from './actions';
import {
    PostsActionTypes_I,
    
    PostsBySubredditState,
    PostsState,
} from './types';

const initialStatePostsBySubreddit: PostsBySubredditState = {};
const initialStatePosts: PostsState = {
    isFetching: false,
    items: [],
    error: null,
    lastUpdated: null,
}

const posts = (
    state = initialStatePosts,
    action: Partial<PostsActionTypes_I>,
): PostsState => {
    switch (action.type) {
        case actions.REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case actions.FAIL_RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                lastUpdated: action.receivedAt,
            }
        case actions.RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts,
                error: null,
                lastUpdated: action.receivedAt,
            }
        default:
          return state
      }
}

const postsBySubreddit = (
    state = initialStatePostsBySubreddit,
    action: Partial<PostsActionTypes_I>,
): PostsBySubredditState => {
    switch (action.type) {
        case actions.RECEIVE_POSTS:
        case actions.FAIL_RECEIVE_POSTS:
        case actions.REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

export default postsBySubreddit;