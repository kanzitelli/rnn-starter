import { all } from 'redux-saga/effects';

import postsBySubreddit from './postsBySubreddit/sagas';
import subreddits from './subreddits/sagas';

export default function* rootSaga() {
    yield all([
        postsBySubreddit(),
        subreddits(),
        // some more
    ]);
}
