import React, { Component } from 'react';
import ProcedureList from './ProcedureList'


const input = {
    border: 'none',
    borderBottom: '2px solid black',
    width: '300px',
    height: '25px',
    
    margin:'5px 10px'
}

class Procedures extends Component {
    constructor(){
        super()

    }

   

    render(){
        console.log(window.location.pathname)
        return(
            <div>
                <input style={input} type="text" placeholder="Search"  />
                <ProcedureList/>
            </div>
        )
    }
}


export default Procedures