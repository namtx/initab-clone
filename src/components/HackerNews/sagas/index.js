import {
  call, put, take, all, takeEvery,
} from 'redux-saga/effects';
import Api from '../../../services';
import {
  FETCH_HN_SUCCESS, FETCH_HN_FAILED, FETCH_STORY_REQUESTED, FETCH_TOP_STORIES_REQUESTED,
} from '../actions/types';

function* fetchHackerNewsTopStories() {
  try {
    const storyIds = yield call(Api.fetchHackerNewsTopStories);
    yield put({ type: FETCH_STORY_REQUESTED, payload: storyIds });
  } catch (error) {
    yield put({ type: FETCH_HN_FAILED, payload: error.message });
  }
}

function* fetchStory(id) { /* eslint-disable-line consistent-return */
  try {
    const story = yield call(Api.fetchHackerNewsStory, id);
    return story;
  } catch (error) {
    yield put({ type: FETCH_HN_FAILED, payload: error.message });
  }
}

export default function* watchFetchTopStories() {
  yield takeEvery(FETCH_TOP_STORIES_REQUESTED, fetchHackerNewsTopStories);
  const action = yield take(FETCH_STORY_REQUESTED);
  const stories = yield all(action.payload.slice(0, 10).map(id => call(fetchStory, id)));
  yield put({ type: FETCH_HN_SUCCESS, payload: stories });
}
