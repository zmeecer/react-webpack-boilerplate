// @flow

import React from 'react';
import AlarmList from '../components/AlarmList';

const mockAlarms = [
  { name: 'Wake up!', time: '8:00' },
  { name: 'Call in 10 minutes', time: '15:50' },
];

export default () => <AlarmList alarms={mockAlarms} />;
