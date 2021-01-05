import React from 'react';
import { render } from 'react-dom';
import { store } from './Redux/Store';
import App from './Container/App';
import { Provider } from 'react-redux';
import './index.css';
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
