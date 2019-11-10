import { 
    ADD_SUBREDDIT,
    DELETE_SUBREDDIT,
} from './names';

const addSubreddit = subreddit => ({
    type: ADD_SUBREDDIT,
    subreddit
});

const deleteSubreddit = subreddit => ({
    type: DELETE_SUBREDDIT,
    subreddit
});

export default {
    addSubreddit,
    deleteSubreddit,
}