import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Label extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChangeTitle = (e, newTitle) => {
    this.setState({ title: newTitle });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      this.props.onLabelChange(this.state.title);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <br />
        <TextField
          hintText="new label"
          onChange={this.onChangeTitle}
        />
      </form>
    );
  }
}

Label.propTypes = {
  onLabelChange: React.PropTypes.func.isRequired,
};

export default Label;
