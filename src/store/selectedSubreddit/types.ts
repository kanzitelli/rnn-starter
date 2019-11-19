import {
    SELECT_SUBREDDIT,
} from './actions';

// =================
// ACTIONS
// =================
export interface SelectedSubredditAction {
    type: typeof SELECT_SUBREDDIT;
    subreddit: string;
}

// =================
// REDUCERS
// =================
export type SelectedSubredditState = string;
