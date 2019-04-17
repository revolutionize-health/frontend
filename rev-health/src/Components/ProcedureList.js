import React from 'react';
import ProcedureCard from './ProcedureCard';
import {getProcedures} from '../Actions/'
import { connect } from "react-redux";


class ProcedureList extends React.Component {
   constructor(){
       super()
      
   }
    componentDidMount() {
        this.props.getProcedures()
        this.setState({
            procedures: this.props.procedures
          });
    }
    
    
    
    render() {
        console.log('these are procedures' , this.props.procedures)
        
        return (
            <div>
               {this.props.procedures.map(procedures =>
	            <ProcedureCard id={procedures.procedure_id} name={procedures.procedure_name} key={procedures.procedure_id}  cost={procedures.cost}/>)}  
            </div>

        )
    }
}


const mapStateToProps = state => (
    
    {
      procedures: state.procedures
    }
  );
  
  export default connect(
    mapStateToProps,
    {getProcedures}
  )(ProcedureList);