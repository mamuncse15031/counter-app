import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { onIncrement, counter, onDelete } = this.props; //destructuring

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>

        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-sm'
        >
          increment
        </button>

        <button
          onClick={() => onDelete(counter.id)}
          className='btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  //expression embedding
  formatCounter = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  };

  //rendering classes dynamically
  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
