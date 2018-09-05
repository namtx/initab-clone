import { call, put } from 'redux-saga/effects';
import { FETCH_HN_REQUESTED } from './types';

const requestFetch = () => (
  { type: FETCH_HN_REQUESTED }
);

export default {
  requestFetch,
};
