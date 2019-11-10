import selectedSubreddit from './selectedSubreddit';
import subreddits from './subreddits';
import postsBySubreddit from './postsBySubreddit';

export default {
    ...selectedSubreddit,
    ...subreddits,
    ...postsBySubreddit,
}