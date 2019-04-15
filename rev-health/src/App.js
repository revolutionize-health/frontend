import React, { Component } from 'react';
import Header from './Components/Header';
import Register from './Components/Register'
import LogIn from './Components/LogIn'
import {Route} from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div><Header className="App-header" /></div>
        <h1>Welcome to Revolutionize Health</h1>
        <p>You can get started by clicking here to view the procedures</p>
        <p>If you would like to create an account or LogIn and add your procedure to the list, click on the links in the navigation bar</p>
       
        <Route path="/login" component={LogIn}/>
        <Route path="/register" component={Register}/>
      
      </div>
    );
  }
}

export default App;
