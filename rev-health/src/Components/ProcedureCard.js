import React from 'react';
import './Components.css';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {deleteProcedure} from '../Actions'



const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
   
}



class ProcedureCard extends React.Component{
    constructor(props){
        super(props);

    }

    clickHandler = () => {
        this.props.deleteProcedure (this.props.id)
        
    }
      
      render(){
          console.log("props", this.props.id)
        let log;
        const isLoggedIn = localStorage.getItem('token');
        if (isLoggedIn) {
            log =  <Link to={`/update/${this.props.id}`} style={{ textDecoration: 'none', color: '#062a3a', cursor: 'pointer', marginTop: '10px' }}>Edit Procedure</Link>;
          } else {
            
          }
        return (
            <div style={mainDiv}>
            <div className={'card-2'}>
              <p>Procedure Name: {this.props.name}</p>
              
                <span>Procedure Cost: {this.props.cost}</span>
                <span>{this.props.procedures}</span>
                {log}
                
                
                
            </div>
            </div>
        )
      }
   


}

const mapStateToProps = state => (
    
    {
      procedures: state.friends
    }
  );
  
  export default connect(
    mapStateToProps,
    {deleteProcedure}
  )(ProcedureCard);