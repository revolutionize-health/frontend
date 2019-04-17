import React from 'react';
import DoctorCard from './DoctorCard';
import {getDoctor} from '../Actions/'
import { connect } from "react-redux";


class DoctorList extends React.Component {
   constructor(){
       super()
      
   }
    componentDidMount() {
        this.props.getDoctor()
        this.setState({
            doctors: this.props.doctors
          });
    }
    
    
    
    render() {
        console.log('these are doctors' , this.props.doctors)
        
        return (
            <div>
               
            </div>

        )
    }
}


const mapStateToProps = state => (
    
    {
      procedures: state.doctors
    }
  );
  
  export default connect(
    mapStateToProps,
    {getDoctor}
  )(DoctorList);