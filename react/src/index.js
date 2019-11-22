import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './untitled.css';
import IndexApp from './IndexApp';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Switch, Link } from 'react-router-dom';

// import UserRegistration from './components/UserRegistration';

ReactDOM.render(<IndexApp />, document.getElementById('rootIndex'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();




