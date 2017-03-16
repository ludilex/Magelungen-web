import React from 'react';
import GoogleLogin from 'react-google-login';
import GoogleClassroomData from './GoogleClassroomData';
import Alert from 'react-bootstrap/lib/Alert';


/*const responseGoogle = (response) => {
  console.log(response);
  {this.handleLogin}
}*/
const alertInstance = (
  <Alert bsStyle="warning">
    <strong>An error has ocurred!</strong> Try it again.
  </Alert>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLogged: false};

    // This binding is necessary to make `this` work in the callback
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(response) {
    console.log(response);
      this.setState((prevState, response) => {
        return {isLogged: true};
    });

  }

  handleError(response) {
    console.log(response);
      this.setState((prevState, response) => {
        return {isLogged: false};
    });
  }



  render () {
    return (
      <GoogleLogin
        clientId="760049322440-1j3bnm8474e8rqn37isbsp3mpohdvj8j.apps.googleusercontent.com"
        buttonText={this.state.isLogged ? "true" : "false"}
        scope="
              https://www.googleapis.com/auth/classroom.profile.emails
              https://www.googleapis.com/auth/classroom.profile.photos
              "
        onSuccess={this.handleLogin}
        onFailure={this.handleError}
      />
    )
  }
}

export default Login;
