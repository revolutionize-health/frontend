import React, { Component } from 'react';
import ProcedureForm from './ProcedureForm'
import MyProcedures from './MyProcedures'
import AddDoctor from './AddDoctor'
import AccountDetails from './AccountDetails'
import AddInsurer from './AddInsurer'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'


const navLinks = {
    margin: '20px',
    textDecoration: 'none',
    color: '#062a3a'
}
const linkBar ={
    padding: '10px',
    marginTop: '10px',
    background: '#AD8E40',
    boxShadow: '0 8px 6px -6px #999',
}



class Dashboard extends Component {

                render(){
                    return (
                        
                            
                        
                        
                        <Router>

                        <div style={linkBar}>
                        <NavLink to="/procedureform"
                                 style={navLinks}
                                 >Add Procedure</NavLink>
                          <NavLink    
                                style={navLinks}
                                to="/doctorform"
                                >Add Doctor</NavLink>
                         <NavLink 
                                style={navLinks}
                                to="/insurer"
                                >Add Insurer</NavLink>
                        
                        <NavLink to="/myprocedures"
                                 style={navLinks}
                                 >My Procedures</NavLink>

                        
                       
                       </div>

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