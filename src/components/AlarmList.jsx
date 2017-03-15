// @flow

import React from 'react';

type Props = {
  alarms: Array<{
    name: string;
    time: string;
  }>;
};

const AlarmList = ({ alarms }: Props) => {
  if (alarms.length === 0) {
    return <p>No alarms set</p>;
  }

  return (
    <ul>
      {alarms.map(alarm => (
        <li key={alarm.name}>
          {alarm.name}: {alarm.time}
        </li>
      ))}
    </ul>
  );
};

export default AlarmList;
