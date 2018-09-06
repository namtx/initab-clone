import {
  take, call, put, takeLatest,
} from 'redux-saga/effects';
import firebaseService from '../../../services/firebase';
import {
  ADD_TODO_SUCCESS, ADD_TODO_FAILED, ADD_TODO, FETCH_SUCCESS,
  FETCH_FAILED, FETCH_TODOS,
  UPDATE_SUCCESS, UPDATE_FAILED, UPDATE_TODO,
} from '../actions/types';

function* addTodo(todo) {
  try {
    const todos = yield call(firebaseService.addTodo, todo);
    yield put({ type: ADD_TODO_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: ADD_TODO_FAILED, payload: error.message });
  }
}

function* fetchTodos() {
  try {
    const todos = yield call(firebaseService.fetchTodos);
    yield put({ type: FETCH_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: FETCH_FAILED, payload: error.message });
  }
}

function* updateTodo(key) {
  try {
    const todos = yield call(firebaseService.updateTodo, key);
    yield put({ type: UPDATE_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: UPDATE_FAILED, payload: error.message });
  }
}

export function* watchTodos() {
  yield takeLatest(FETCH_TODOS, fetchTodos);
  while (true) {
    const todoAction = yield take(ADD_TODO);
    const { payload } = todoAction;
    yield call(addTodo, payload);
  }
}

export function* watchUpdateTodo() {
  while (true) {
    const updateAction = yield take(UPDATE_TODO);
    const { key } = updateAction.payload;
    yield call(updateTodo, key);
  }
}
