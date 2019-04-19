import React from 'react';
import './Components.css';
import { connect } from "react-redux";
import {deleteInsurer, getInsurer} from '../Actions'




const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
    
    
}
const icon ={
  background: 'none',
  border: 'none'
}

class InsurerCard extends React.Component{
    constructor(props){
        super(props);

    }

    clickHandler = () => {
        this.props.deleteInsurer(this.props.id);
        
        
    }
    
      render(){
          console.log("props", this.props.name)

        return (
            <div style={mainDiv}>
             <div className={'card-2'}>
              <p>Insurer Name:  {this.props.name}</p>
                
                <button onClick={this.clickHandler} style={icon}><i className="far fa-minus-square"></i></button>
                
            </div>
                
            </div>
        )
      }
   


}

const mapStateToProps = state => (
    
    {
      insurers: state.insurers
    }
  );
  
  export default connect(
    mapStateToProps,
    {deleteInsurer, getInsurer}
  )(InsurerCard);