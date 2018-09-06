import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Reddit from './components/Reddit';
import rootReducer from './reducers';
import rootSaga from './sagas';
import HackerNews from './components/HackerNews';
import Todo from './components/Todo';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Todo />
    </div>
  </Provider>,
  document.getElementById('index'),
);
