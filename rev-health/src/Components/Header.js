import React from 'react'
import {NavLink} from 'react-router-dom'

const mainDiv = {
width: '100vw',
height: '60px',
background: '#DEDEDE',
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end'


}

const links = {
    margin: '0 20px'
}




const Header = () => {
    return (
        <div style={mainDiv}>
            <NavLink to="/procedures" style={links}>View Procedures</NavLink>
            <span style={links}> | </span>
            <NavLink to="/login" style={links}>Log In</NavLink>
            <span style={links}> | </span>
            <NavLink to="/register" style={links}>Create Account</NavLink>
        </div>
    )
}



export default Header