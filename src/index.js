import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import './sass/index.scss';

ReactDom.render(
  <App/>,
  document.querySelector('.root')
);