import {
    SELECT_SUBREDDIT,
} from './actions';

// =================
// ACTIONS
// =================
export interface SelectSubredditAction {
    type: typeof SELECT_SUBREDDIT,
    subreddit: string,
}

// =================
// REDUCERS
// =================
export type SelectedSubredditState = string