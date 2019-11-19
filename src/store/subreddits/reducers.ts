import { 
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from './actions';
import {
    SubredditsActionTypes_I,

    SubredditsState,
} from './types';

const initialState: SubredditsState = [
    {
        title: 'reactjs',
    },
    {
        title: 'reactnative',
    },
    {
        title: 'golang',
    },
    {
        title: 'rust',
    },
]

const subreddits = (
    state = initialState,
    action: Partial<SubredditsActionTypes_I>,
): SubredditsState => {
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

export default subreddits;