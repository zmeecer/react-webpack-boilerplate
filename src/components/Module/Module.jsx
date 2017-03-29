import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import appframeStore from '../../store';
import Label from '../../containers/Label';
import './Module.css';

class Module extends Component {
  getChildContext() {
    return {
      appframeStore,
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <Label />
          </div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

Module.childContextTypes = {
  appframeStore: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};

Module.propTypes = {
  children: PropTypes.any,
};

export default Module;
