// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoLists from './todolists';
import CurrentTodo from './todo';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      activeId: -1,
    }
  }

  selectList = (activeId) => {
    this.setState({ activeId })
  }

  addTodoItem = (item) => {
    const { lists, activeId } = this.state;
    const currentList = lists[activeId];
    currentList.push(item);
    this.setState({ lists })
  }

  updateTodo = (index) => {
    const { lists, activeId } = this.state;
    const currentList = lists[activeId].todos; //Select todos of current list
    currentList[index].done = !currentList[index].done //From array choose the element
    this.setState({ lists }) //we need and change the state of it
  }

  render() {
    const { lists, activeId } = this.state;
    return (
      <div className='container'>
        <div className='main'>
          <TodoLists
            activeId={activeId}
            lists={lists}
            selectList={this.selectList}
          />
          <CurrentTodo
            currentList={lists[activeId]}
            addTodoItem={this.addTodoItem}
            updateTodo={this.updateTodo}
          />
        </div>
      </div>
    );
  }
};

render(<Main />,
		document.getElementById('react-container'));
