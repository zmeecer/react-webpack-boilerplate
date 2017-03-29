import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers';

const initStore = () => {
  /* eslint-disable no-underscore-dangle */
  // because of http://zalmoxisus.github.io/redux-devtools-extension/#1.1-basic-store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable no-underscore-dangle */

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(),
    ),
  );

  return store;
};

export default initStore();
