import { call, put, takeEvery } from 'redux-saga/effects';
import {
    requestPosts,
    receivePosts,
    failReceivePosts,
} from './actions';
import {
    RequestPostsAction
} from './types';

async function fetchPostsApi(reddit: string) {
    const response = await fetch(`https://www.reddit.com/r/${reddit}.json`);
    return await response.json();
}

function* fetchPosts({ subreddit }: RequestPostsAction) {
    try {
        const json = yield call(fetchPostsApi, subreddit);
        yield put(receivePosts(subreddit, json));
    } catch (e) {
        yield put(failReceivePosts(subreddit, e));
    }
}

export default function* postsBySubreddit() {
    yield takeEvery<RequestPostsAction>(requestPosts, fetchPosts);
}