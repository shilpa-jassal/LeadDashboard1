import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
//      fields: {},
//      errors: {},
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
//  handleChange(e) {
//    let fields = this.state.fields;
//    fields[e.target.name] = e.target.value;
//    this.setState({
//      fields
//    });
//  }

handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

  submituserRegistrationForm(e) {

      e.preventDefault();
        console.log("LOgin data", this.state)
        axios.post("http://127.0.0.1:8000/auth-jwt/", this.state)
            .then(response => {
                console.log(response.data.token)
                localStorage.setItem("token",response.data.token)
                this.setState({loggedIn:true})
            })
            .catch(error => {
                console.log(error)
            })


    }

//  validateForm() {
//    let fields = this.state.fields;
//    let errors = {};
//    let formIsValid = true;
//    if (!fields["userid"]) {
//      formIsValid = false;
//      errors["userid"] = "*Please enter your Username";
//    }
//    if (typeof fields["userid"] !== "undefined") {
//      //regular expression for username validation
//      var pattern = new RegExp(/^[a-zA-Z ]*$/);
//      if (!pattern.test(fields["userid"])) {
//        formIsValid = false;
//        errors["userid"] = "*Please enter valid Username";
//      }
//    }
//    if (!fields["password"]) {
//      formIsValid = false;
//      errors["password"] = "*Please enter your password.";
//    }
//    if (typeof fields["password"] !== "undefined") {
//      if (!fields["password"].match(/^[a-zA-Z ]*$/)) {
//        formIsValid = false;
//        errors["password"] = "*Please enter correct password.";
//      }
//    }
//    this.setState({
//      errors: errors
//    });
//    return formIsValid;
//  }

  render() {

     const { username, password } = this.state
    if(this.state.loggedIn){
      return <Redirect to='/LeadDashboard'/>
    }
    return (
      <div>
        <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input type="username" name="username" value={username} onChange={this.handleChange} id="Username" placeholder="Enter your Username" />
            <div style={{ color: "red", fontSize: "14px" }}> </div>
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" value={password} onChange={this.handleChange} id="Password" placeholder="Enter your password" />
            <div style={{ color: "red", fontSize: "14px" }}> </div>
          </FormGroup>
          <Button type="submit">Submit</Button>

        </Form>
      </div>
    );
  }
}
export default Login;