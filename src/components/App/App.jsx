import React, { Component } from 'react';
import Module from '../../components/Module';
import Actions from '../../containers/Actions';

class App extends Component {
  render() {
    return (
      <Module>
        <Actions />
      </Module>
    );
  }
}

export default App;
