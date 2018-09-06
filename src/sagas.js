import { fork } from 'redux-saga/effects';

import fetchRedditSaga from './components/Reddit/sagas';
import fetchHackerNewsTopStoriesSaga from './components/HackerNews/sagas';
import { watchTodos, watchUpdateTodo } from './components/Todo/sagas';

export default function* rootSaga() {
  yield [fork(fetchRedditSaga), fork(fetchHackerNewsTopStoriesSaga), fork(watchTodos), fork(watchUpdateTodo)]; /* eslint-disable-line max-len */
}
