import {
    SelectSubredditAction,
} from './types';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const selectSubreddit = (
    subreddit: string,
): SelectSubredditAction => ({
    type: SELECT_SUBREDDIT,
    subreddit
});