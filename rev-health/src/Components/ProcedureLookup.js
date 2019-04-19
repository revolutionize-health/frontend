import React, { Component } from 'react';
import ProcedureList from './ProcedureList'

class Procedures extends Component {
    constructor(){
        super()

    }

   

    render(){
        console.log(window.location.pathname)
        return(
            <div>
                <input type="text" placeholder="Search"  />
                <ProcedureList/>
            </div>
        )
    }
}


export default Procedures