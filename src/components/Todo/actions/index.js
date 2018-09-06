import { ADD_TODO, FETCH_TODOS, UPDATE_TODO } from './types';

const addTodo = todo => (
  { type: ADD_TODO, payload: todo }
);

const updateTodo = key => (
  { type: UPDATE_TODO, payload: { key } }
);

const fetchTodos = () => (
  { type: FETCH_TODOS }
);

export default {
  addTodo,
  fetchTodos,
  updateTodo,
};
