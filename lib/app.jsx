// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoLists from './todolists';
import CurrentTodo from './todo';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <div className='main'>
          <TodoLists />
          <CurrentTodo />
        </div>
      </div>
    );
  }
};

render(<Main />,
		document.getElementById('react-container'));
