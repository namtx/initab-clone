import { fork } from 'redux-saga/effects';

import fetchRedditSaga from './components/Reddit/sagas';
import fetchHackerNewsTopStoriesSaga from './components/HackerNews/sagas';

export default function* rootSaga() {
  yield [fork(fetchRedditSaga), fork(fetchHackerNewsTopStoriesSaga)];
}
