// @flow

import React from 'react';

export default
class TodoLists extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='todo-list'>
        <h4>Todo Lists</h4>
        <div className='search-wrapper'>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type='text' className='search' placeholder='Search for List' />
        </div>
        <div className='todos'>
          <li>Private</li>
          <li className='active'>Work</li>
          <li>Training</li>
          <li>Friends</li>
        </div>
        <div className='add-todo'>
          <input type='text' className='input' placeholder='Enter new list name' />
          <div className='add'>+</div>
        </div>
      </div>
    );
  }
};
