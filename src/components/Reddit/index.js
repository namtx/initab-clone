import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRequest } from './actions';
import Header from './Header';
import Item from './Item';

class Reddit extends Component {
  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { fetching, posts, fetchSuccess } = this.props;
    return (
      <div>
        <Header title="Popular on r/vietnamtechblogs" />
        {
          fetching ? (
            <div>Loading</div>
          ) : (
            <ul>
              {fetchSuccess && posts.map(p => <Item key={p.id} {...p} />)}
            </ul>
          )
        }
      </div>
    );
  }
}

Reddit.propTypes = {
  fetching: PropTypes.bool,
  posts: PropTypes.shape(PropTypes.array),
  fetchSuccess: PropTypes.bool,
};

Reddit.defaultProps = {
  fetching: false,
  posts: [],
  fetchSuccess: false,
};

const mapStateToProps = state => (
  {
    posts: state.reddit.posts,
    fetching: state.reddit.fetching,
    fetchSuccess: state.reddit.fetchSuccess,
  }
);

const mapDispatchToProps = dispatch => (
  { fetch: () => dispatch(fetchRequest()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
