import {
    SELECT_SUBREDDIT,
} from './actions';
import {
    SelectSubredditAction,
    SelectedSubredditState,
} from './types';

const initialState: SelectedSubredditState = '';

const selectedSubreddit = (
    state = initialState,
    action: SelectSubredditAction,
) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

export default selectedSubreddit;