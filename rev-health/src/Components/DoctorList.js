import React from 'react';
import DoctorCard from './DoctorCard';
import {getDoctor} from '../Actions/'
import { connect } from "react-redux";


class DoctorList extends React.Component {
   constructor(props){
       super(props)
      
   }
    componentDidMount() {
        this.props.getDoctor()
        
    }


    render() {
        console.log('these are doctors' , this.props.doctors)
        
        return (
            <div>
               {this.props.doctors.map(doctors =>
	            <DoctorCard  doctors={doctors} key={doctors.doctor_id + doctors.doctor_name} id={doctors.doctor_id} />)}  
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
    {getDoctor}
  )(DoctorList);