import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'grommet-css';

import './index.css';
import MainContainer from './containers/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './createStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={MainContainer} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
