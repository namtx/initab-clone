import React from 'react';
import PropTypes from 'prop-types';
import styles from './HackerNews.scss';

const GOOGLE_FAVICONS_ORIGIN = 'https://www.google.com/s2/favicons?domain=';

const Story = ({ url, title }) => (
  <li className={styles.item}>
    <img src={`${GOOGLE_FAVICONS_ORIGIN}${url}`} alt={url} />
    <a href={url}>{title}</a>
  </li>
);

Story.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Story;
