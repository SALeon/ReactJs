import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { HELLO, ROOT, ROOT_1 } from './constants';

const reactCreateElement = React.createElement('h1', null, `${HELLO} from React.createComponent!`);

ReactDOM.render(reactCreateElement, document.getElementById(ROOT_1));
ReactDOM.render(<Root />, document.getElementById(ROOT));
