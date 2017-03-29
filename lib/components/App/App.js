import React, { Component } from 'react';
import Module from '../../components/Module';
import Actions from '../../containers/Actions';

class App extends Component {
  render() {
    return React.createElement(
      Module,
      null,
      React.createElement(Actions, null)
    );
  }
}

export default App;