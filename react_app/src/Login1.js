import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["userid"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Login Successfull");
    }

  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["userid"]) {
      formIsValid = false;
      errors["userid"] = "*Please enter your Username";
    }
    if (typeof fields["userid"] !== "undefined") {
      //regular expression for username validation
      var pattern = new RegExp(/^[a-zA-Z ]*$/);
      if (!pattern.test(fields["userid"])) {
        formIsValid = false;
        errors["userid"] = "*Please enter valid Username";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter correct password.";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input type="username" name="userid" value={this.state.fields.userid} onChange={this.handleChange} id="Username" placeholder="Enter your Username" />
          <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.errors.userid}</div>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} id="Password" placeholder="Enter your password" />
          <div style={{ color: "red", fontSize: "14px" }} className="errorMsg">{this.state.errors.password}</div>
        </FormGroup>
        <Button type="submit" className="button" value="Login">Login</Button>
      </form>
    );
  }
}
export default Login;