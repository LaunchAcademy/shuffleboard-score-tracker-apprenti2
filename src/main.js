import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data';
import App from './components/App'

ReactDOM.render(
  <App data={data}/>, document.getElementById('app')
);
