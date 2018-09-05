import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../../services';
import { REDDIT_FETCH_SUCCESS, REDDIT_FETCH_FAILED, REDDIT_FETCH_REQUESTED } from '../actions/types';

function* fetchRedditPosts() {
  try {
    const posts = yield call(Api.fetchRedditPosts);
    yield put({ type: REDDIT_FETCH_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: REDDIT_FETCH_FAILED, payload: error.message });
  }
}

export default function* watchRedditFetch() {
  yield takeEvery(REDDIT_FETCH_REQUESTED, fetchRedditPosts);
}
