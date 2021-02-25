import React, {Component} from 'react';
import './login.css';
import { Button, Card, CardBody, Form, FormGroup, Col, Input } from 'reactstrap';

class Login extends Component {

  state = { 
    email: "",
    password: ""
}

handleChange(event, element) {
  var value = event.currentTarget.value
  if(element === "email") {
      this.setState({
          email: value
      })
  }
  else if(element === "password") {
      this.setState({
          password: value
      })
  }
}

handleLogin() {
  console.log(this.state.email);
  console.log(this.state.password);
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
                      <b>Log in</b>
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
                          <Input type="password" name="password" placeholder="Password" onChange={(event) => this.handleChange(event, "password")}/>
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
                <div className='login-text'>
                  <div className='row mt-4'>
                    <a href='#' className='login_links'>
                      Forgot Password?
                    </a>
                  </div>
                  <div className='row mt-5'>
                    <div className='signup_instead'>
                    <a href='/signup' className='login_links'>
                      Sign-Up Instead?
                    </a>
                    </div>
                    <div className='login_button'>
                      <Button color='primary' onClick={this.handleLogin.bind(this)}>Login</Button>
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

export default Login;
