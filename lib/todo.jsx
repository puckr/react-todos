// @flow

import React, {Component} from 'react';

export default
class CurrentTodo extends Component {
  constructor() {
    super();
    this.state = {
      newTodoName: '',
    }
  }

  sortByName = (firstItem, secondItem) => {
    const firstName = firstItem.name.toLowerCase();
    const secondName = secondItem.name.toLowerCase();
    if( firstName < secondName ) {
      return -1;
    }
    if ( firstName > secondName ) {
      return 1;
    }
    return 0;
  }

  sortByDone = (firstItem, secondItem) => {
    const firstDone = firstItem.done;
    const secondDone = secondItem.done;
    if( firstDone === true && secondDone === false ) { //Check compare functions in MDN
      return 1; // Return 1 means first element is lower in sort than second one
    }
    if( firstDone === false && secondDone === true ) {
      return -1;
    }
    return 0;
  }

  formatData = (currentList) => {
    if (currentList) {
      const { updateTodo } = this.props;
      const { title, todos } = currentList;
      let doneCount = 0;
      todos.forEach(todo => {
        doneCount += todo.done ? 1 : 0;
      })
      const doneText = `${doneCount} of ${todos.length} Done`;
      const sortedByNameTodos = todos.sort(this.sortByName);
      const sortedTodos = sortedByNameTodos.sort(this.sortByDone);
      const todoElements = sortedTodos.map((todo, idx) => {
        const shouldCheck = todo.done ? 'checked' : '';
        return (
          <li key={idx} className={shouldCheck}>
            <div className="checkbox">
              <input type="checkbox" value="None"
                id={`checkbox${idx}`} name="check" checked={ todo.done }
                onChange={() => updateTodo(idx)}
              />
              <label htmlFor={`checkbox${idx}`}></label>
            </div>
            {todo.name}
          </li>
        );
      })
      return { title, doneText, todoElements };
    }
    return { title: '', doneText: '', todoElements: [] };
  }

  nameChanged = (e) => {
    const { currentList } = this.props;
    const newTodoName = e.target.value;
    if(e.key==='Enter' && newTodoName.trim()) {
      currentList.todos.push({name: newTodoName, done: false});
      this.setState({newTodoName: ''})
    }
    else
      this.setState({ newTodoName });
  }

  addNewTodo = () => {
    const { newTodoName } = this.state;
    const { currentList } = this.props;
    if(newTodoName.trim()) {
      currentList.todos.push({name: newTodoName, done: false});
      this.setState({newTodoName: ''})
    }
  }

  render() {
    const { newTodoName } = this.state;
    const { currentList } = this.props;
    const data = this.formatData(currentList);
    const { title, doneText, todoElements } = data;
    return (
      <div className='todo'>
        <div className='todo-name'>
          <h1>{ title }</h1>
          <p>{ doneText }</p>
        </div>
        <div className='todos'>
          { todoElements }
        </div>
        <div className='add-todo'>
          <input type='text' className='input' placeholder='Enter new Todo'
            value={newTodoName}
            onChange={this.nameChanged}
            onKeyPress={this.nameChanged}
          />
          <div className='add' onClick={this.addNewTodo}>+</div>
        </div>
      </div>
    );
  }
};
