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

    clickHandler = () => {
        this.props.deleteProcedure (this.props.id)
        
    }
      
      render(){
          console.log("props", this.props)
        return (
            <div style={mainDiv}>
            
                
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