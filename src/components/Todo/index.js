import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from './actions';
import Item from './Item';
import styles from './Todo.scss';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      newTodo: '',
    };
  }

  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  addTodoHandle() {
    const { add } = this.props;
    const { newTodo } = this.state;
    add(newTodo);
    this.setState({
      newTodo: '',
    });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTodoHandle();
    }
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value,
    });
  }

  handleClick(key) {
    const { update } = this.props;
    update(key);
  }

  render() {
    const { isFetching, fetchSuccess, todos } = this.props;
    const todoArray = todos && Object.keys(todos)
      .map(key => ({ itemKey: key, content: todos[key].content, done: todos[key].done }));
    const { newTodo } = this.state;

    return (
      <div>
        <div className={styles.input}>
          <input type="text" value={newTodo} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
        </div>
        { isFetching ? (
          <p>Loading...</p>
        ) : (
          <ul>
            { fetchSuccess
               && todoArray.reverse()
                 .map(todo => (
                   <Item clickHandler={this.handleClick} {...todo} />
                 ))
            }
          </ul>
        )}
      </div>
    );
  }
}

Todo.propTypes = {
  isFetching: PropTypes.bool,
  fetchSuccess: PropTypes.bool,
  todos: PropTypes.shape(PropTypes.object.isRequired),
  add: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  isFetching: false,
  fetchSuccess: false,
  todos: {},
};

const mapStateToProps = state => (
  { ...state.todo }
);

const mapDispatchToProps = dispatch => (
  {
    add: todo => dispatch(actions.addTodo(todo)),
    fetch: () => dispatch(actions.fetchTodos()),
    update: key => dispatch(actions.updateTodo(key)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
