import { combineReducers } from 'redux';

import selectedSubreddit from './selectedSubreddit';
import subreddits from './subreddits';
import postsBySubreddit from './postsBySubreddit';

const rootReducer = combineReducers({
    selectedSubreddit, 
    subreddits,
    postsBySubreddit,
})

export default rootReducer