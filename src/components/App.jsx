import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>APP</h2>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
};

export default App;
