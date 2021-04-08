import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ['tag1', 'tag2', 'tag3'],
  };

  //passing event arguments
  handleIncrement = (product) => {
    console.log(product);
    //event Handler, Biding Event Handler
    this.setState({ value: this.state.value + 1 }); //Updating State
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
        {/* {this.renderTags()}; */}
      </div>
    );
  }

  //expression embedding
  formatCounter = () => {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  };

  //rendering classes dynamically
  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  // renderTags = () => {
  //   //Conditional Rendering
  //   if (this.state.tags.length === 0) return <p>There are no Tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag} </li> //rendering lists
  //       ))}
  //     </ul>
  //   );
  // };
}

export default Counter;
