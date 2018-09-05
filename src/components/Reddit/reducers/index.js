import { REDDIT_FETCH_REQUESTED, REDDIT_FETCH_SUCCESS, REDDIT_FETCH_FAILED } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case REDDIT_FETCH_REQUESTED:
      return { ...state, posts: [], fetching: true };
    case REDDIT_FETCH_SUCCESS:
      return {
        ...state, posts: action.payload, fetchSuccess: true, fetching: false,
      };
    case REDDIT_FETCH_FAILED:
      return {
        ...state, posts: [], fetchSuccess: false, fetching: false,
      };
    default:
      return state;
  }
};
