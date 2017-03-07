import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './index.css';

const responseGoogle = (response) => {
  console.log(response);
}


ReactDOM.render(
  <GoogleLogin
    clientId="760049322440-1j3bnm8474e8rqn37isbsp3mpohdvj8j.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('root')
);
