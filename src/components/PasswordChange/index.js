import React, { Component } from "react";
import { withFirebase } from "../Firebase/context";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor() {
    super();

    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { passwordOne } = this.state;
    this.props.firebase
      .passwordChange(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne === "" || passwordOne !== passwordTwo;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="passwordOne"
          type="password"
          value={passwordOne}
          onChange={this.handleChange}
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          type="password"
          value={passwordTwo}
          onChange={this.handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit" disabled={isInvalid}>
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
