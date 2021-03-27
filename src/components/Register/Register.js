import React, { Component } from "react";
import connect from "react-redux";
import actions from "../redux/auth";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
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
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
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

const mapDispatchToProps = (dispatch) => {
  () => dispatch(actions.registerSucces);
};

export default connect(null, mapDispatchToProps)(RegisterForm);
