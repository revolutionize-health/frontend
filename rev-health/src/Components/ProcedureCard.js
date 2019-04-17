import React from 'react';
import './Components.css';
import { connect } from "react-redux";



const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
    
}

class ProcedureCard extends React.Component{
    constructor(props){
        super(props);

    }

    clickHandle = id => {
        console.log("clicked!");
        this.props.deleteProcedure(id);
      };
      
      render(){
        return (
            <div style={mainDiv}>
            <div 
                className={'card-1'}
                key={this.props.procedure.id}>
                <i  className="fas fa-ellipsis-v menu"></i>
                
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
    {}
  )(ProcedureCard);