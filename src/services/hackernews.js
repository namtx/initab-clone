import axios from 'axios';

const HACKER_NEWS_ORIGIN = 'https://hacker-news.firebaseio.com/v0';

export const fetchHackerNewsTopStories = () => (
  axios.get(`${HACKER_NEWS_ORIGIN}/topstories.json?print=pretty`)
    .then(response => response.data)
    .catch(error => error.message)
);

export const fetchHackerNewsStory = id => (
  axios.get(`${HACKER_NEWS_ORIGIN}/item/${id}.json`)
    .then(response => response.data)
    .catch(error => error.message)
);
