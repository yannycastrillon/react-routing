// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// CSS
import './css/style.css';

// import routes
import routes from './router.js'

// Render
render((
  routes
), document.getElementById('root'));
