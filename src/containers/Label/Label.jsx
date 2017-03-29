import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <h1>
        {this.props.title}
      </h1>
    );
  }
}

Label.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Label;
