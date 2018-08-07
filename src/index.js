import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../src/components/App';

const render = App => ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);

render(App);
