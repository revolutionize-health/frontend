import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


const mainDiv = {
width: '100vw',
height: '60px',
background: '#062a3a',
display: 'block',
alignItems: 'center',
justifyContent: 'flex-end',
boxShadow: '0 8px 6px -6px #999',
zIndex: '2'


}

const links = {
    margin: '0 20px',
    float: 'right',
    marginTop:'15px',
    color: "#AD8E40", 
    textDecoration: 'none'
}
const link ={
    display: 'block',
    float: 'left',
    marginTop:'15px',
    marginLeft:'20px',
    color: "#AD8E40",
    textDecoration: 'none'
}





class Header extends Component {
   
    render(){

        let log;
        const isLoggedIn = localStorage.getItem('token');
        if (isLoggedIn) {
            log = <NavLink to="/" style={links}  onClick={()=>localStorage.removeItem('token')} >LogOut</NavLink>;
          } else {
            log = <NavLink to="/login" style={links} >LogIn</NavLink>;
          }

    return (

        <div style={mainDiv}>
            <NavLink to="/dashboard" style={link}><i className="fas fa-columns"></i> MyDashboard</NavLink>
            <NavLink to="/procedures" style={links}><i  className="fas fa-home"></i> View Procedures</NavLink>
            <span style={links}> | </span>

            
            {log}
        
            
            
            

            
        </div>
    )
}
}


export default Header