import axios from 'axios';

const REDDIT_ORIGIN = 'https://www.reddit.com';

const fetchRedditPosts = () => (
  axios.get(`${REDDIT_ORIGIN}/r/vietnamtechblogs.json?sort=popular`)
    .then((response) => {
      const posts = response.data.data.children;
      return posts.map((p) => {
        const {
          id, title, author_fullname, score, url, /* eslint-disable-line camelcase */
        } = p.data;
        return {
          id, title, authorFullname: author_fullname, score, url,
        };
      });
    })
    .catch(error => error.message)
);

export default fetchRedditPosts;
