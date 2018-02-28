import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LayoutComponent from './components/layout/layout';

import Reducers from './reducers';
import './index.css';

const store = createStore(Reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <LayoutComponent />
  </Provider>,
  document.getElementById('root')
);
