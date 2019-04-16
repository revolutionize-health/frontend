import React from 'react'
import {NavLink} from 'react-router-dom'

const mainDiv = {
width: '100vw',
height: '60px',
background: '#062a3a',
display: 'block',
alignItems: 'center',
justifyContent: 'flex-end',
boxShadow: '0 8px 6px -6px #999'


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





const Header = () => {
    return (
        <div style={mainDiv}>
            <NavLink to="/dashboard" style={link}><i class="fas fa-columns"></i> MyDashboard</NavLink>
            <NavLink to="/procedures" style={links}><i  class="fas fa-home"></i> View Procedures</NavLink>
            <span style={links}> | </span>
            <NavLink to="/login" style={links}><i class="far fa-user"></i>  Log In</NavLink>
            <span style={links}> | </span>
            <NavLink to="/register" style={links}><i  class="fas fa-user-plus"></i> Create Account</NavLink>
            
        </div>
    )
}



export default Header