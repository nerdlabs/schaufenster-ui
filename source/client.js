import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const initialProps = JSON.parse(document.getElementById('initial-props').textContent);

const createElement = (C, p) => React.createElement(C, {...p, ...initialProps});

ReactDOM.render((
  <Router history={browserHistory} routes={routes} createElement={createElement} />
), document.getElementById('app'));
