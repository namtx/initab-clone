import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reddit.scss';

const Item = ({
  title,
  authorFullname,
  score,
  url,
  permalink,
}) => (
  <li className={styles.item}>
    <a href={url}>
      <p className="white">{title}</p>
      <p>
        <span className="cyan">Posted by:&nbsp;</span>
        <span className="yellow">
          {`u/${authorFullname}`}
        </span>
      </p>
      <p>
        <span className="comment">
          Reddit Score:&nbsp;
          {score}
        </span>
      </p>
      <a className="pink" href={`https://reddit.com${permalink}`}>Link to Comments</a>
    </a>
  </li>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  authorFullname: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
};

export default Item;
