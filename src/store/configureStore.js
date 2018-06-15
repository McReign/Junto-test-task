import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

export default function (initialState={}, reducer) {
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  const store = createStore(reducer, initialState, composeEnhancers());

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}