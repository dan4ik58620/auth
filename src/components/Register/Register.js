import React, { Component } from "react";
import { connect } from "react-redux";
import { operations } from "../../redux/auth";

console.log(operations);

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password,
    };
    this.props.onRegister(newUser);

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const {name, email, password} = this.state;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            value={email}
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">register</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: operations.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
