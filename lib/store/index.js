'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = function initStore() {
  /* eslint-disable no-underscore-dangle */
  // because of http://zalmoxisus.github.io/redux-devtools-extension/#1.1-basic-store
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  /* eslint-enable no-underscore-dangle */

  var store = (0, _redux.createStore)(_reducers2.default, composeEnhancers((0, _redux.applyMiddleware)()));

  return store;
};

exports.default = initStore();