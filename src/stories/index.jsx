// @flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import AlarmList from '../components/AlarmList';
import AddAlarmButton from '../components/AddAlarmButton';
import About from '../components/About';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('AlarmList', module)
  .add('with no alarms', () => (
    <AlarmList alarms={[]} />
  ))
  .add('with two alarms', () => {
    const alarms = [
      { name: 'Wake up!', time: '8:00' },
      { name: 'Call in 10 minutes', time: '15:50' },
    ];

    return <AlarmList alarms={alarms} />;
  })
  .add('with five alarms', () => {
    const alarms = ['8:00', '9:00', '10:00', '11:00', '12:00'];
    return <AlarmList alarms={alarms.map(time => ({ name: time, time }))} />
  });

storiesOf('AddAlarmButton', module)
  .add('with default text', () => (
    <AddAlarmButton onClick={action('clicked')} />
  ));

storiesOf('About', module)
  .add('page with static texts', () => (
    <About />
  ));
