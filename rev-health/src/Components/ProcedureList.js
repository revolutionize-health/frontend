import React from 'react';
import ProcedureCard from './ProcedureCard';
import {getProcedures} from '../Actions/'
import { connect } from "react-redux";


class ProcedureList extends React.Component {
   
    componentDidMount() {
        this.props.getProcedures()
    }
    
    
    
    render() {
        console.log('these are procedure' , this.props.procedures)
        return (
            <div>
                {this.props.procedures.map(procedures => {
                    return <ProcedureCard procedures={procedures} />
                })}
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