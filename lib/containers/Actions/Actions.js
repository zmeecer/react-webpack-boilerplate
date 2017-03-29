import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Label extends Component {
  constructor() {
    super();

    this.onChangeTitle = (e, newTitle) => {
      this.setState({ title: newTitle });
    };

    this.onSubmit = e => {
      e.preventDefault();
      if (this.state.title) {
        this.props.onLabelChange(this.state.title);
      }
    };

    this.state = {
      title: ''
    };
  }

  render() {
    return React.createElement(
      'form',
      { onSubmit: this.onSubmit },
      React.createElement('br', null),
      React.createElement(TextField, {
        hintText: 'new label',
        onChange: this.onChangeTitle
      })
    );
  }
}

Label.propTypes = {
  onLabelChange: React.PropTypes.func.isRequired
};

export default Label;