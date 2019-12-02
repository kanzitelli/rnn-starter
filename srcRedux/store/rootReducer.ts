import { combineReducers } from 'redux';

import selectedSubreddit from './selectedSubreddit/reducers';
import subreddits from './subreddits/reducers';
import postsBySubreddit from './postsBySubreddit/reducers';

const rootReducer = combineReducers({
    selectedSubreddit,
    subreddits,
    postsBySubreddit,
});

export default rootReducer;
