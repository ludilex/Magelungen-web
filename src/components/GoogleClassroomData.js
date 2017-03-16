import React from 'react';
import axios from 'axios';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'
import Login from './Login';


const headers = {
  access_token: 'Bearer ya29.GlwQBMWvO_ym5WfQsykNGirHZuGqRNETotqDEP020UsZ3DscST7d4f2G2uNPHvNM8J8tjM3Py0ox7xOHu6MEuqzci3DXMEWyp4uAho5iB-yqHWhVfj8WFse9_p4G4Q'
};


const axiosInstance = axios.create({
  baseURL: 'https://classroom.googleapis.com',
  timeout: 2000,
  headers: { 'Authorization': headers.access_token }
});

class GoogleClassroomData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
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

  render() {


    return (
      <div>
        <Get url="https://classroom.googleapis.com/v1/courses" instance={axiosInstance}>
          {(error, response, isLoading) => {
            if(error) {
              return (<div>Something bad happened: {error.message}</div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (<div>{response.data.message}</div>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
  )
}
};

export default GoogleClassroomData;
