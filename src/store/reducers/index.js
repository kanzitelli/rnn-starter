import { combineReducers } from 'redux';

import { 
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_SUBREDDIT,
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from '../actions/names';

const subredditsInitState = [
    {
        title: 'reactjs',
    },
    {
        title: 'reactnative',
    },
    {
        title: 'rust',
    },
    {
        title: 'golang',
    },
    {
        title: 'elixir',
    }
]

const selectedSubreddit = (state = '', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const subreddits = (state = subredditsInitState, action) => {
    switch (action.type) {
        case ADD_SUBREDDIT:
            // check on duplicates
            if (!state.find(sr => sr.title === action.subreddit)) {
                return [
                    ...state,
                    { title: action.subreddit },
                ]
            }
            return state;
        case DELETE_SUBREDDIT:
            return state.filter(v => v.title !== action.subreddit);
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    items: []
}, action) => {
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

const postsBySubreddit = (state = {}, action) => {
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

const rootReducer = combineReducers({
    selectedSubreddit, 
    subreddits,
    postsBySubreddit
})

export default rootReducer