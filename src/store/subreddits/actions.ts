export const ADD_SUBREDDIT = 'ADD_SUBREDDIT';
export const DELETE_SUBREDDIT = 'DELETE_SUBREDDIT';

export const addSubreddit = (
    subreddit: string,
): AddSubredditAction => ({
    type: ADD_SUBREDDIT,
    subreddit,
});

export const deleteSubreddit = (
    subreddit: string,
): DeleteSubredditAction => ({
    type: DELETE_SUBREDDIT,
    subreddit,
});
