import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class LoginForm extends Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />
          <button type="submit">Login User</button>
        </form>
      </div>
    );
  }
}
