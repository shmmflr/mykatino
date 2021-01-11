import React from 'react';
import { render } from 'react-dom';
import { store } from './Core/Redux/Store';
import App from './Container/App';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
