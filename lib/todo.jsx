// @flow

import React from 'react';

export default
class CurrentTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='todo'>
        <div className='todo-name'>
          <h1>Work</h1>
          <p>1 of 5 Done</p>
        </div>
        <div className='todos'>
          <li>
            <div className="checkbox">
              <input type="checkbox" value="None" id="checkbox1" name="check" />
              <label htmlFor="checkbox1"></label>
            </div>
            Ask for a raise
          </li>
          <li>
            <div className="checkbox">
              <input type="checkbox" value="None" id="checkbox2" name="check" />
              <label htmlFor="checkbox2"></label>
            </div>
            Scream at my co-workers
          </li>
          <li>
            <div className="checkbox">
              <input type="checkbox" value="None" id="checkbox3" name="check" />
              <label htmlFor="checkbox3"></label>
            </div>
            Send out the recent paperwork
          </li>
          <li>
            <div className="checkbox">
              <input type="checkbox" value="None" id="checkbox4" name="check" />
              <label htmlFor="checkbox4"></label>
            </div>
            Buy a present for my Boss
          </li>
          <li className='done'>
            <div className="checkbox">
              <input type="checkbox" value="None" id="checkbox5" name="check" />
              <label htmlFor="checkbox5"></label>
            </div>
            Watch some funny videos on youtube when nobody is looking
          </li>
        </div>
        <div className='add-todo'>
          <input type='text' className='input' placeholder='Enter new Todo' />
          <div className='add'>+</div>
        </div>
      </div>
    );
  }
};
