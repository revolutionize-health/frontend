import React, { Component } from 'react';
import Header from './Components/Header';
import Register from './Components/Register';
import LogIn from './Components/LogIn';
import PrivateRoute from './Components/PrivateRoute';
import ProcedureLookUp from './Components/ProcedureLookup';
import Dashboard from './Components/DashBoard'
import {Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div><Header className="App-header" /></div>
       
       
        <Route path="/login" component={LogIn}/>
        <Route path="/register" component={Register}/>
        <Route path="/procedures" component={ProcedureLookUp} />

        <PrivateRoute 
            path="/dashboard" 
            component={() => <Dashboard data={this.props.data} />}
          />
      
      </div>
    );
  }
}

export default App;
