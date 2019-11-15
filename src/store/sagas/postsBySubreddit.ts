import { call, put, takeEvery } from 'redux-saga/effects';
import actions, { REQUEST_POSTS } from '../actions';

interface IApiReddit {
    type: string,
    subreddit: string;
}

async function fetchPostsApi(reddit: string) {
    const response = await fetch(`https://www.reddit.com/r/${reddit}.json`);
    return await response.json();
}

function* fetchPosts({ subreddit }: IApiReddit) {
    try {
        const json = yield call(fetchPostsApi, subreddit);
        yield put(actions.receivePosts(subreddit, json));
    } catch (e) {
        yield put(actions.failReceivePosts(subreddit, e));
    }
}

export default function* postsBySubreddit() {
    yield takeEvery<IApiReddit>(actions.requestPosts, fetchPosts);
}