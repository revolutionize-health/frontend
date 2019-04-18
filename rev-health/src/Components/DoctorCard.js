import React from 'react';
import './Components.css';
import { connect } from "react-redux";
import {deleteDoctor, getDoctor} from '../Actions'




const mainDiv ={
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px'
    
}

class DoctorCard extends React.Component{
    constructor(props){
        super(props);

    }

    clickHandler = () => {
        this.props.deleteDoctor(this.props.id);
        
        
    }
    
      render(){
          console.log("props", this.props)

        return (
            <div style={mainDiv}>
             <div className={'card-2'}>
              <p>Doctor Name:  {this.props.name}</p>
              <p>Doctor's Website:  {this.props.website}</p>
                <span>Edit Doctor</span>
                <button onClick={this.clickHandler}><i className="far fa-minus-square"></i></button>
                
            </div>
                
            </div>
        )
      }
   


}

const mapStateToProps = state => (
    
    {
      doctors: state.doctors
    }
  );
  
  export default connect(
    mapStateToProps,
    {deleteDoctor, getDoctor}
  )(DoctorCard);