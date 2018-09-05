import { combineReducers } from 'redux';
import redditReducers from './components/Reddit/reducers';
import hackerNewsReducers from './components/HackerNews/reducers';

export default combineReducers({
  reddit: redditReducers,
  hackernews: hackerNewsReducers,
});
