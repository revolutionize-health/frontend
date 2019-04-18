import React from 'react';
import './Components.css';
import { connect } from "react-redux";
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
          console.log("props", this.props)
        return (
            <div style={mainDiv}>
            <div className={'card-2'}>
              <p>Procedure Name: {this.props.name}</p>
                <span>Procedure Cost: {this.props.cost}</span>
                <span>{this.props.procedures}</span>
                
                
                
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