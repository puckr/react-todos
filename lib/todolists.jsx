// @flow

import React from 'react';

export default
class TodoLists extends React.Component {
  constructor() {
    super();
  }

  /*
  <h4>Todo Lists</h4>
  <input type='text' placeholder='Search for the List' />
  <div class='todos'>
    <li>Private</li>
    <li>Work</li>
    <li>Training</li>
    <li>Friends</li>
  </div>
  <div>
    <input type='text' placeholder='Search for the List' />
    <div className='add'>+</div>
  </div>
  */

  render() {
    return (
      <div className='todo-list'>
      </div>
    );
  }
};
