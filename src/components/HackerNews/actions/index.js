import { FETCH_TOP_STORIES_REQUESTED } from './types';

const requestFetch = () => (
  { type: FETCH_TOP_STORIES_REQUESTED }
);

export default {
  requestFetch,
};
