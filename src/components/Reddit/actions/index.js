import { REDDIT_FETCH_REQUESTED } from './types';

/* eslint-disable */
export const fetchRequest = () => (
  { type: REDDIT_FETCH_REQUESTED, isRequesting: true }
);
