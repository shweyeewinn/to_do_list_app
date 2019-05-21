import React, { Component } from 'react';
import ToDoItems from './ToDoItems';

import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = '';

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default ToDoList;
