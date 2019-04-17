import React, { Component } from 'react';
import ProcedureForm from './ProcedureForm'
import MyProcedures from './MyProcedures'
import AddDoctor from './AddDoctor'
import AccountDetails from './AccountDetails'
import AddInsurer from './AddInsurer'
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
                          <NavLink    
                                style={navLinks}
                                to="/doctorform"
                                >Add Doctor</NavLink>
                        
                        <NavLink to="/myprocedures"
                                 style={navLinks}
                                 >My Procedures</NavLink>
                        
                        <NavLink 
                                 style={navLinks}
                                 
                                 to="/accountsettings"
                                 >Account Settings</NavLink>
                        <NavLink 
                                style={navLinks}
                                to="/insurer"
                                >Add Insurer</NavLink>
                      
                        <Route path ="/procedureform" component={ProcedureForm}/>
                        <Route path ="/myprocedures" component={MyProcedures}/>
                        <Route path ="/doctorform" component={AddDoctor} />
                        <Route path ="/accountsettings" component={AccountDetails} />
                        <Route path ="/insurer" component={AddInsurer} />
                        
                        </Router>
                        
                        
                    )
                }
            }

export default Dashboard