import React from 'react';
import ReactDOM from 'react-dom/server';
import { AppContainer } from 'react-hot-loader'
import App from '../src/components/App';

const render = App => ReactDOM.hydrate(
  <AppContainer><App /></AppContainer>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App.js', () => {
    const App = require('./components/App').default;
    render(App);
  });
}

render(App);
