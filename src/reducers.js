import { combineReducers } from 'redux';
import redditReducers from './components/Reddit/reducers';

export default combineReducers({
  reddit: redditReducers,
});
