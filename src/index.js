import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { Router } from 'react-router-dom';
import rootReducer from './store/rootReducer';
import rootSaga from './store/rootSaga';
import './index.css';
import App from './components/App/index';

const history = createHistory();
const store = configureStore({}, rootReducer, rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
