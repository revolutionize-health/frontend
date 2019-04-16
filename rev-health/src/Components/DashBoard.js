import React, { Component } from 'react';
import ProcedureForm from './ProcedureForm'
import MyProcedures from './MyProcedures'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


const navLinks = {
    margin: '20px',
    textDecoration: 'none'
}



class Dashboard extends Component {

                render(){
                    return (
                        
                            
                        
                        
                        <Router>
                        <NavLink to="/procedureform"
                                 style={navLinks}
                                 >Add Procedure</NavLink>
                        
                        <NavLink to="/myprocedures"
                                 style={navLinks}
                                 >My Procedures</NavLink>
                        <NavLink 
                                 style={navLinks}
                                 
                                 to="/main"
                                 >Log Out</NavLink>
                        <Route path ="/procedureform" component={ProcedureForm}/>
                        <Route path ="/myprocedures" component={MyProcedures}/>
                        
                        </Router>
                        
                        
                    )
                }
            }

export default Dashboard