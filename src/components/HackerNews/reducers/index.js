import { FETCH_HN_SUCCESS, FETCH_STORY_REQUESTED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HN_SUCCESS:
      return { ...state, stories: action.payload };
    case FETCH_STORY_REQUESTED:
      return { ...state, ids: action.payload };
    default:
      return state;
  }
};
