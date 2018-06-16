import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

export default function (initialState={}, reducer) {
  //подключение панели разработчика REDUX
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  //создание хранилища
  const store = createStore(reducer, initialState, composeEnhancers());

  //подключение автоматического обновления страницы с данными
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}