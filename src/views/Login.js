import React from 'react';
import GoogleLogin from 'react-google-login';
import {handleLogin} from './../components/GoogleClassroomData';


function responseGoogle (responseGoogle) {
  return handleLogin(responseGoogle);
}

export default function Login () {
    return(
      <GoogleLogin
        clientId="760049322440-1j3bnm8474e8rqn37isbsp3mpohdvj8j.apps.googleusercontent.com"
        buttonText="Login with your Google Account"
        scope="
              https://www.googleapis.com/auth/classroom.profile.emails
              https://www.googleapis.com/auth/classroom.profile.photos
              "
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    )
}
