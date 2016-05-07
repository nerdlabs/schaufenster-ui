import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/habitats/app';
import ComponentRenderer from './components/habitats/component-renderer';

export default (
  <Route path='/' component={App}>
    <Route path='/show/*' component={ComponentRenderer} />
  </Route>
);
