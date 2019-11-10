import { 
    SELECT_SUBREDDIT,
} from './names';

const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export default {
    selectSubreddit,
}