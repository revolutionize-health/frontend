import React from 'react';
import InsurerCard from './InsurerCard';
import {getInsurer} from '../Actions/'
import { connect } from "react-redux";


class InsurersList extends React.Component {
   constructor(props){
       super(props)
      
   }
    componentDidMount() {
        this.props.getInsurer()
        
    }


    render() {
        console.log('these are insurers' , this.props)
        
        return (
            <div>
               {this.props.insurers.map(insurers =>
	            <InsurerCard insurers={insurers} key={insurers.insurer_id}/>)}  
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
    {getInsurer}
  )(InsurersList);