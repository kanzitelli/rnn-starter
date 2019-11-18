import { all } from 'redux-saga/effects'

import postsBySubreddit from './postsBySubreddit/sagas';

export default function* rootSaga() {
    yield all([
        postsBySubreddit(),
        // some more
    ])
}