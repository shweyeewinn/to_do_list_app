import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
    // this.delete = this.delete.bind(this);
  }

  createTask = ({ entries }) =>
    entries.map(item => (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    ));

  delete(key) {
    this.props.delete(key);
  }

  render() {
    return (
      <div className="theListContainer">
        <ul className="theList">
          <FlipMove duration={250} easing="ease-out">
            {this.createTask(this.props)}
          </FlipMove>
        </ul>
      </div>
    );
  }
}
export default ToDoItems;
