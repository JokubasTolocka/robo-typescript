import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <App />,
  //gets as HTMLelement
  document.getElementById('root') as HTMLElement
);
serviceWorker.unregister();