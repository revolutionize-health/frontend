import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { addProcedure } from '../Actions';



const form = {
    display: 'flex',
    justifyContent: 'center'
}
const input = {
    border: 'none',
    borderBottom: '2px solid black',
    width: '300px',
    height: '25px',
    
    margin:'5px 10px'
}

const title={
    fontSize: '1rem',
    textDecoration: 'underine'
    
}

class ProcedureForm extends Component {
constructor(){
    super()
    this.state={
            
        procedure_name:"",
        cost:""
        
    }
}

        handleChange = event => {
            this.setState({
            
                ...this.state,
                [event.target.name]: event.target.value
            
            });
        };

        

        handleSubmit = event => {
            event.preventDefault();
            this.props.addProcedure(this.state)   
            alert("your procedure has been added")
            this.setState({
            procedure_name: "",
            cost: "",
           
        })   
        }

        render(){
            return(
                <div>
                    
                    
                    <form onSubmit={this.handleSubmit}>
                    <p style={title}>Procedure Name:</p>
                    <input type="text"
                           name="procedure_name"
                           placeholder="procedure"
                           value={this.state.procedure} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    <p style={title}>Procedure Cost $:</p>
                    <input type="number"
                            name="cost"
                            placeholder="cost"
                            value={this.state.cost}
                            onChange={this.handleChange}
                            style={input}></input>
                    <div style={form}>
                    <div>
                    
                    </div>
                    </div>
                    <Button variant="contained" color="primary" type="submit">
                            Add Procedure
                            </Button>

                    </form>
                </div>
            )
        }
    }



    const mapStateToProps = state => ({
        addingProcedure: state.addingProcedure,
        error: state.error,
        data: state.data
    })
    
    export default connect(mapStateToProps, {addProcedure}) (ProcedureForm);