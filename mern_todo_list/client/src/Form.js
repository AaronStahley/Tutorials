import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    const newText = e.target.value;
    this.setState({
      text: newText
    });
  };

  handleKeyDown = e => {
    console.log(e);
    if (e.key === "Enter") {
      this.props.submit(this.state.text);
      this.setState({ tex: "" });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <TextField
        label="todo..."
        margin="normal"
        fullWidth
        value={text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
