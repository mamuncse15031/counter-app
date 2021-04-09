import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1'>
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>

        <div className='col'>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm'
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-secondary btn-sm m-2'
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='btn-danger btn-sm'
          >
            Delete
          </button>
        </div>
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
