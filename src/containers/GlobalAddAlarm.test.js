// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalAddAlarm from './GlobalAddAlarm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalAddAlarm />, div);
});
