import React, { Component } from 'react';
import Header from './Components/Header';
import Register from './Components/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Register />
         
        
      </div>
    );
  }
}

export default App;
