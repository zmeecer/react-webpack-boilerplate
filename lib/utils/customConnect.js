var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { connect } from 'react-redux';
import React from 'react';
import store from '../store';

export default function connectAppFrame(WrappedComponent) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  const ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return props => React.createElement(ConnectedWrappedComponent, _extends({}, props, { store: store }));
}