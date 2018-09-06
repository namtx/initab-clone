import { combineReducers } from 'redux';
import redditReducers from './components/Reddit/reducers';
import hackerNewsReducers from './components/HackerNews/reducers';
import todoReducers from './components/Todo/reducers';

export default combineReducers({
  reddit: redditReducers,
  hackernews: hackerNewsReducers,
  todo: todoReducers,
});
