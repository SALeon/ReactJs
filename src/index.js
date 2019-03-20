import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode!');
}

ReactDOM.render((<>Hello word</>), document.getElementById('js-root-component'));
