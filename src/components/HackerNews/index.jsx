import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import Story from './Story';


class HackerNew extends React.Component {
  componentWillMount() {
    const { fetchStories } = this.props;
    fetchStories();
  }

  render() {
    const { isFetching, fetchSuccess, stories } = this.props;
    return (
      <div>
        { isFetching ? (
          <p>Loading...</p>
        ) : (
          <ul>
            { fetchSuccess && stories.map(story => <Story key={story.id} {...story} />) }
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    stories: state.hackernews.stories,
    isFetching: state.hackernews.isFetching,
    fetchSuccess: state.hackernews.fetchSuccess,
  }
);

const mapDispatchToProps = dispatch => (
  { fetchStories: () => dispatch(actions.requestFetch()) }
);

export default connect(mapStateToProps, mapDispatchToProps)(HackerNew);
