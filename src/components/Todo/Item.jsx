import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.scss';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const { clickHandler } = this.props;
    clickHandler(key);
  }

  render() {
    const { itemKey, content, done } = this.props;
    return (
      <li>
        <div>
          <input id={itemKey} className={styles.checkbox} type="checkbox" onClick={() => this.handleClick(itemKey)} checked={done} />
          { /* eslint-disable-next-line */ }
          <label htmlFor={itemKey} className={done ? styles.done : styles.pending}>{content}</label>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  itemKey: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Item;
