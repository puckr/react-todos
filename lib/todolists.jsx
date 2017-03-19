// @flow

import React, {Component} from 'react';

export default
class TodoLists extends Component {
  constructor() {
    super();
    this.state = {
      newListName: '',
      searchText: '',
    }
  }

  searchChanged = (e) => {
    const searchText = e.target.value.toLowerCase();
    this.setState({ searchText });
  }

  sortByName = (firstItem, secondItem) => {
    const firstName = firstItem.title.toLowerCase();
    const secondName = secondItem.title.toLowerCase();
    if( firstName < secondName ) {
      return -1;
    }
    if ( firstName > secondName ) {
      return 1;
    }
    return 0;
  }

  newListName = (e) => {
    const { lists } = this.props;
    const newListName = e.target.value;
    if(e.key==='Enter' && newListName.trim()) {
      lists.push({ title: newListName, todos: []});
      this.setState({newListName: ''})
    }
    else
      this.setState({ newListName });
  }

  addNewList = () => {
    const { newListName } = this.state;
    const { lists, newList } = this.props
    if(newListName.trim()) {
      lists.push({ title: newListName, todos: []});
      this.setState({newListName: ''})
    }
  }

  getTodos = () => {
    const { searchText } = this.state;
    const { lists, activeId, selectList } = this.props;
    const sortedList = lists.sort(this.sortByName);
    const elements = sortedList.map(({title}, idx) => {
      const elmName = title.toLowerCase();
      const className = idx === activeId ? 'active' : '';
      if (elmName.includes(searchText)) {
        return <li key={idx} className={ className }
          onClick={() => selectList(idx)}>{ title }</li>
      }
    })
    return elements;
  }

  render() {
    const { newListName, searchText } = this.state;
    const todos = this.getTodos();
    return (
      <div className='todo-list'>
        <h4>Todo Lists</h4>
        <div className='search-wrapper'>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type='text' className='search' placeholder='Search for List'
            value = {searchText}
            onChange={this.searchChanged}
          />
        </div>
        <div className='todos'>
          { todos }
        </div>
        <div className='add-todo'>
          <input type='text' className='input' placeholder='Enter new list name'
            value = {newListName}
            onChange={this.newListName}
            onKeyPress={this.newListName}
          />
          <div className='add' onClick={this.addNewList}>+</div>
        </div>
      </div>
    );
  }
};
