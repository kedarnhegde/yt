import React, {Component} from 'react';
import './login.css';
import { Button, Card, CardBody, Form, FormGroup, Col, Input } from 'reactstrap';

class SignUp extends Component {

  state = { 
    email: "",
    password1: "",
    password2: ""
}

handleChange(event, element) {
  var value = event.currentTarget.value
  if(element === "email") {
      this.setState({
          email: value
      })
  }
  else if(element === "password1") {
      this.setState({
          password1: value
      })
  }
  else if(element === "password2") {
    this.setState({
        password2: value
    })
}
}

handleLogin() {
  console.log(this.state.email);
  console.log(this.state.password1);
  console.log(this.state.password2);

if (this.state.password1 !== this.state.password2){
  alert("Passwords do not match");
}
if (this.state.password1.length < 8){
  alert("Password too short!");
}

}


  render() {
      return (
        <div className="container">
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <Card className='login-card'>
            <CardBody>
              <div className='container'>
                <div className='row'>
                  <img src='https://blog.logomyway.com/wp-content/uploads/2020/09/youtube-logo-4.jpg' alt='YT_Logo' className='YT_Logo'></img>
                </div>
                <div className='login-text'>
                  <div className='row mt-4'>
                    <h2>
                      <b>Sign Up</b>
                    </h2>
                  </div>
                  <div className='row'>
                    <h6>
                      <b>to coninue to our website</b>
                    </h6>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-12'>
                    <Form>
                      <FormGroup row className='mt-2'>
                        <Col>
                          <Input type="email" name="email" placeholder="Email-ID" onChange={(event) => this.handleChange(event, "email")}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row className='mt-2'>
                        <Col>
                          <Input type="password" name="password1" placeholder="Password" onChange={(event) => this.handleChange(event, "password1")}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row className='mt-2'>
                        <Col>
                          <Input type="password" name="password2" placeholder="Confirm Password" onChange={(event) => this.handleChange(event, "password2")}/>
                        </Col>  
                      </FormGroup>
                      <div className='password'><p className='row'>Password must contain atleast 8 characters, mix of letters, numbers & symbols is recomended</p></div>
                    </Form>
                  </div>
                </div>
                <div className='login-text'>
                  
                  <div className='row mt-5'>
                    <div className='signup_instead'>
                    <a href='/login' className='login_links'>
                      Already have an account?
                    </a>
                    </div>
                    <div className='login_button'>
                      <Button color='primary' onClick={this.handleLogin.bind(this)}>Sign-Up</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
      );
  }
}

export default SignUp;
