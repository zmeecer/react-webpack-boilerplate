import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MyAlarms from './containers/MyAlarms';
import GlobalAddAlarm from './containers/GlobalAddAlarm';
import About from './components/About';

function bootstrap() {
  ReactDOM.render(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Alarms</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={MyAlarms} />
        <Route path="/about" component={About} />

        <GlobalAddAlarm />
      </div>
    </Router>,
    document.getElementById('app'),
  );
}

bootstrap();
