import React from 'react';
import PropTypes from 'prop-types';

import styles from './Reddit.css';

const Header = ({ title }) => (
  <h1 className={styles.header}>{title.toUpperCase()}</h1>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
