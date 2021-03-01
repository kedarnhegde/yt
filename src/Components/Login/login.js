import React,{useState} from 'react';
import './login.css';
import { Card, CardBody} from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login(){
  const [Email,setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [EmailError,setEmailError] = useState(false);
  const [PasswordError,setPasswordError] = useState(false);
  const [EmailErrorMsg,setEmailErrorMsg] = useState('');
  const [PasswordErrorMsg,setPasswordErrorMsg] = useState('');


  const handleChange = (event, element) =>{
    var value = event.currentTarget.value
    if(element === "email") {
        setEmail(value);
    }
    else if(element === "password") {
        setPassword(value);
    }
  }

  const handleLogin = ()=> {
    console.log(Email);
    console.log(Password);
  }
  return (
    <div className="login">
      <div className='row'>
        <div className='col-12 col-md-6 offset-md-3'>
          <Card className='login-card mt-4'>
            <CardBody>
              <div className='container'>
                <div style = {{textAlign:'center'}}>
                  <img src='https://blog.logomyway.com/wp-content/uploads/2020/09/youtube-logo-4.jpg' alt='YT_Logo' className='YT_Logo'></img>
                </div>
                <div className='login-text'>
                  <div className='mt-4' style = {{textAlign:'center'}}>
                    <h2>
                      <b>Log in</b>
                    </h2>
                  </div>
                  <div className='' style = {{textAlign:'center'}}>
                    <h6>
                      <b>to continue to our website</b>
                    </h6>
                  </div>
                </div>
                <div className='mt-4 textfield'>
                  <div className='col-12'>
                    {EmailError?<TextField error id="outlined-basic" label="Email" variant="outlined" onChange={(event) => handleChange(event, "email")} style = {{width : '100%'}} helperText = {EmailErrorMsg}/>:<TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event) => handleChange(event, "email")} style = {{width : '100%'}}/>}
                    <div className ='mt-3'>{PasswordError?<TextField error id="outlined-basic" label="Password" variant="outlined" type = 'password' onChange={(event) => handleChange(event, "password")} style = {{width : '100%'}} helperText = {PasswordErrorMsg}/>:<TextField id="outlined-basic" label="Password" variant="outlined" onChange={(event) => handleChange(event, "password")} style = {{width : '100%'}}/>}</div>
                  </div>
                </div>
                <div className='login-text'>
                  <div className='mt-4' style = {{textAlign:'left'}}>
                    <a href='/login' className='login_links col-12 '>
                      Forgot Password?
                    </a>
                  </div>
                  <div className='row mt-5 container'>
                    <div className='signup_instead col-12 col-sm-6'>
                    <a href='/signup' className='login_links'>
                      Sign-Up Instead?
                    </a>
                    </div>
                    <div className='login_button offset-sm-2 col-sm-4'>
                    <Button variant="contained" color="primary" onClick = {handleLogin.bind(this)}>
                      Log In
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


export default Login;
