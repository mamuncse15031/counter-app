import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  renderTags = () => {
    //Conditional Rendering
    if (this.state.tags.length === 0) return <p>There are no Tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag} </li> //rendering lists
        ))}
      </ul>
    );
  };

  handleIncrement = (product) => {
    console.log(product);
    //event Handler, Biding Event Handler
    this.setState({ count: this.state.count + 1 }); //Updating State
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className='btn btn-secondary btn-sm'
        >
          increment
        </button>
        {this.renderTags()};
      </div>
    );
  }

  //expression embedding
  formatCounter = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };

  //rendering classes dynamically
  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
