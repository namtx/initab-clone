import { ADD_TODO_SUCCESS, ADD_TODO_FAILED, FETCH_TODOS, FETCH_SUCCESS, UPDATE_SUCCESS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return {
        ...state, isFetching: false, todos: action.payload, fetchSuccess: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state, todos: action.payload, fetchSuccess: true, isFetching: false,
      };
    case ADD_TODO_FAILED:
      return { ...state, fetchSuccess: false };
    case UPDATE_SUCCESS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
