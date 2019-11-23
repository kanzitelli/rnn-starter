export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const selectSubreddit = (
    subreddit: string,
): SelectedSubredditAction => ({
    type: SELECT_SUBREDDIT,
    subreddit,
});
