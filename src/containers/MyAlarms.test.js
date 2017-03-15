// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import MyAlarms from './MyAlarms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyAlarms />, div);
});
