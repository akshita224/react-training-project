import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }
  handleChange = (event) => {
    const {name, value } = event.target;
    this.setState({ [name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted",this.state);
  };

  render() {
    return (
      <>
      <h3>Controlled Form</h3>
      <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          /><br></br>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br></br>
          <button className= "button" style={{background: '#4CAF50'}}type="submit">Submit</button>
        </form>

      </>
    )
  }
}
