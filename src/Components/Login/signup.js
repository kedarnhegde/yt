import React,{useState} from 'react';
import './login.css';
import {Card, CardBody} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignUp() {
  const [Email,setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [EmailErrorMsg , setEmailErrorMsg] = useState('');
  const [PasswordError, setPasswordError] = useState(false);
  const [PasswordErrorMsg , setPasswordErrorMsg] = useState('');

  const handleChange = (event, element) => {
    var value = event.currentTarget.value
    if(element === "email") {
        setEmail(value);
    }
    else if(element === "password1") {
        setPassword(value);
    }
    else if(element === "password2") {
      setPasswordCheck(value);
  }
  }

  const handleLogin = () => {
    console.log(Email);
    console.log(Password);
    console.log(PasswordCheck);
    console.log(Password.length);
  if (Password !== PasswordCheck){
    setPasswordErrorMsg("Passwords do not match");
    setPasswordError(true);
  }
  else if (Password.length < 8 || PasswordCheck < 8){
    setPasswordErrorMsg("Password too short!");
    setPasswordError(true);
  }
}
  return (
    <div className="register mt-2 mb-2">
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <Card className='login-card'>
            <CardBody>
              <div className='container'>
                <div style = {{textAlign:'center'}}>
                  <img src='https://blog.logomyway.com/wp-content/uploads/2020/09/youtube-logo-4.jpg' alt='YT_Logo' className='YT_Logo'></img>
                </div>
                <div className='login-text'>
                  <div className='row justify-content-center mt-4'>
                    <h2>
                      <b>Sign Up</b>
                    </h2>
                  </div>
                  <div className='row justify-content-center'>
                    <h6>
                      <b>to continue to our website</b>
                    </h6>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-12'>
                    {EmailError?<TextField error id="outlined-basic" label="Email" variant="outlined" onChange={(event) => handleChange(event, "email")} style = {{width : '100%'}} helperText = {EmailErrorMsg}/>:<TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event) => handleChange(event, "email")} style = {{width : '100%'}}/>}
                    <div className ='mt-3'>{PasswordError?<TextField error id="outlined-basic" label="Password" variant="outlined" type = 'password' onChange={(event) => handleChange(event, "password1")} style = {{width : '100%'}} helperText = {PasswordErrorMsg}/>:<TextField id="outlined-basic" label="Password" variant="outlined" onChange={(event) => handleChange(event, "password1")} style = {{width : '100%'}} type = 'password'/>}</div>
                    <div className ='mt-3'>{PasswordError?<TextField error id="outlined-basic" label="Confirm Password" variant="outlined" type = 'password' onChange={(event) => handleChange(event, "password2")} style = {{width : '100%'}} helperText = {PasswordErrorMsg}/>:<TextField id="outlined-basic" label="Password" variant="outlined" onChange={(event) => handleChange(event, "password2")} style = {{width : '100%'}} type = 'password'/>}</div>
                  </div>
                </div>
                <div className='login-text'>
                  
                  <div className='row mt-5'>
                    <div className='signup_instead col-12 col-sm-8'>
                    <a href='/login' className='login_links'>
                      Already have an account?
                    </a>
                    </div>
                    <div className='login_button col-12 col-sm-4'>
                    <Button variant="contained" color="primary" onClick = {handleLogin.bind(this)}>
                      Sign In
                    </Button>
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


export default SignUp;
