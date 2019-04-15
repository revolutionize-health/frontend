import React, { Component } from 'react';
import ProcedureForm from './ProcedureForm'
import MyProcedures from './MyProcedures'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'





class Dashboard extends Component {

                render(){
                    return (
                        <div>
                            
                        <NavLink to="/procedureform">Add a new Procedure</NavLink>
                        
                        <NavLink to="/myprocedures">My Procedures</NavLink>
                        
                        <Router>
                        
                        <Route path ="/procedureform" component={ProcedureForm}/>
                        <Route path ="/myprocedures" component={MyProcedures}/>
                        

                        
                        </Router>
                        </div>
                    )
                }
            }

export default Dashboard