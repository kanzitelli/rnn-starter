import { 
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from '../actions/names';

const initialState = [
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

const subreddits = (state = initialState, action) => {
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