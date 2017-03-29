import { connect } from 'react-redux';
import React from 'react';
import store from '../store';

export default function connectAppFrame(WrappedComponent, ...args) {
  const ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return props => (
    <ConnectedWrappedComponent {...props} store={store} />
  );
}
