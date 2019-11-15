import { call, put, takeEvery } from 'redux-saga/effects';
import actions, { REQUEST_POSTS } from '../actions';

function fetchPostsApi(reddit) {
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
}

function* fetchPosts({ subreddit }) {
    try {
        const json = yield call(fetchPostsApi, subreddit);
        yield put(actions.receivePosts(subreddit, json));
    } catch (e) {
        console.log(`Some error - ${e}`);
        yield put(actions.failReceivePosts(subreddit, e));
    }
}

export default function* postsBySubreddit() {
    yield takeEvery(REQUEST_POSTS, fetchPosts);
}