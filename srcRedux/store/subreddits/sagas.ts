import { put, takeEvery } from 'redux-saga/effects';
import { DELETE_SUBREDDIT } from './actions';

import { deletePosts } from '../postsBySubreddit/actions';

function* deletePostsForSubreddit({ subreddit }: DeleteSubredditAction) {
    yield put(deletePosts(subreddit));
}

export default function* subreddits() {
    yield takeEvery<DeleteSubredditAction>(DELETE_SUBREDDIT, deletePostsForSubreddit);
}
