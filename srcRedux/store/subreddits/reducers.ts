import {
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from './actions';

const initialState: SubredditsState = [
    {
        title: 'redux',
    },
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
];

const subreddits = (
    state = initialState,
    action: SubredditsActionTypes_I,
): SubredditsState => {
    switch (action.type) {
        case ADD_SUBREDDIT:
            // check on duplicates
            if (!state.find((sr) => sr.title === action.subreddit)) {
                return [
                    ...state,
                    { title: action.subreddit },
                ];
            }
            return state;
        case DELETE_SUBREDDIT:
            return state.filter((v) => v.title !== action.subreddit);
        default:
            return state;
    }
};

export default subreddits;
