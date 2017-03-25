// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import AlarmList from './AlarmList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlarmList alarms={[]} />, div);
});
