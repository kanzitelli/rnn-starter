import {
    SELECT_SUBREDDIT,
} from './actions';

const initialState: SelectedSubredditState = '';

const selectedSubreddit = (
    state = initialState,
    action: SelectedSubredditAction,
): SelectedSubredditState => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};

export default selectedSubreddit;
