import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

function bootstrap() {
  ReactDOM.render(
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </App>
    </Router>,
    document.getElementById('app'),
  );
}

bootstrap();
