import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        Hello world!!!
      </div>
    );
  }
};

ReactDOM.render(<Todo />,
		document.getElementById('react-container'));
