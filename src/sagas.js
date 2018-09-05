import { fork } from 'redux-saga/effects';

import fetchRedditSaga from './components/Reddit/sagas';

export default function* rootSaga() {
  yield [fork(fetchRedditSaga)];
}
