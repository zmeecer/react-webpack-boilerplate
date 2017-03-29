import React, { Component } from 'react';

class Label extends Component {
  render() {
    return React.createElement(
      'h1',
      null,
      this.props.title
    );
  }
}

Label.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Label;