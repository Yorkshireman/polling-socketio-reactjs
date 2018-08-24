import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import APP from './components/APP.js';

ReactDOM.render(
  <Router>
    <APP />
  </Router>, document.getElementById('react-container')
);
