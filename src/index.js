import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode!');
}

ReactDOM.render(<App />,
  document.getElementsByClassName('js-root-component')[0]);
