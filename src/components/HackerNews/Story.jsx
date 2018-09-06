import React from 'react';
import PropTypes from 'prop-types';

const GOOGLE_FAVICONS_ORIGIN = 'https://www.google.com/s2/favicons?domain=';

const Story = ({ url, title }) => (
  <li>
    <img src={`${GOOGLE_FAVICONS_ORIGIN}${url}`} alt={url} />
    <a href={url}>{title}</a>
  </li>
);

Story.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Story;
