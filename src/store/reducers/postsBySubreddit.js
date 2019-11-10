import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from '../actions/names';

const initialStatePostsBySubreddit = {};
const initialStatePosts = {
    isFetching: false,
    items: [],
}

const posts = (state = initialStatePosts, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
          return {
            ...state,
            isFetching: true,
        }
        case RECEIVE_POSTS:
          return {
            ...state,
            isFetching: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        }
        default:
          return state
      }
}

const postsBySubreddit = (state = initialStatePostsBySubreddit, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

export default postsBySubreddit;