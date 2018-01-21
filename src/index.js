import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

const root = document.getElementById('root');

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <Component/>
  </Provider>,
  root);

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}