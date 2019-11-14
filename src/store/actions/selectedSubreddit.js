import { 
    SELECT_SUBREDDIT,
} from './index';

const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export default {
    selectSubreddit,
}