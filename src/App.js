import React, { Component } from 'react';
//import logo from './logo.svg'; //check how this was imported :)
import './App.css';
import Login from './views/Login';
import GoogleClassroomData from './components/GoogleClassroomData';
import Dashboard from './views/Dashboard';

class App extends Component {


  render() {
    return (
        <div className="App">
              <GoogleClassroomData />
              <Dashboard />
        </div>
    );
  }
}

export default App;
