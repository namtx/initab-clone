import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  title,
  authorFullname,
  score,
  url,
}) => (
  <div>
    <p>{title}</p>
    <p>
      Posted by:&nbsp;
      {`u/${authorFullname}`}
    </p>
    <p>
      Reddit Score:&nbsp;
      {score}
    </p>
    <a href={url}>Link to Comments</a>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  authorFullname: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
