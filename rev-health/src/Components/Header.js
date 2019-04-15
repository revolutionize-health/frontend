import React from 'react'
import {NavLink} from 'react-router-dom'

const mainDiv = {
width: '100vw',
height: '60px',
background: '#DEDEDE',
display: 'block',
alignItems: 'center',
justifyContent: 'flex-end'


}

const links = {
    margin: '0 20px',
    float: 'right',
    marginTop:'15px'
}
const link ={
    display: 'block',
    float: 'left',
    marginTop:'15px',
    marginLeft:'20px'
}




const Header = () => {
    return (
        <div style={mainDiv}>
            <NavLink to="/dashboard" style={link}><i class="fas fa-columns"></i> MyDashboard</NavLink>
            <NavLink to="/procedures" style={links}><i class="fas fa-home"></i> View Procedures</NavLink>
            <span style={links}> | </span>
            <NavLink to="/login" style={links}><i class="fas fa-user"></i>  Log In</NavLink>
            <span style={links}> | </span>
            <NavLink to="/register" style={links}><i class="fas fa-user-plus"></i> Create Account</NavLink>
            
        </div>
    )
}



export default Header