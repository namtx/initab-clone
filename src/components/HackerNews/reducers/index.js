import { FETCH_HN_SUCCESS, FETCH_STORY_REQUESTED, FETCH_TOP_STORIES_REQUESTED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOP_STORIES_REQUESTED:
      return { ...state, isFetching: true, fetchSuccess: false };
    case FETCH_HN_SUCCESS:
      return {
        ...state, stories: action.payload, isFetching: false, fetchSuccess: true,
      };
    case FETCH_STORY_REQUESTED:
      return { ...state, ids: action.payload };
    default:
      return state;
  }
};
