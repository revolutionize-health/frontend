import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { addInsurer } from '../Actions';



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

class AddDoctor extends Component {
constructor(){
    super()
    this.state={
            
        insurer_name:"",

        
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
            this.props.addInsurer(this.state)      
        }

        render(){
            return(
                <div>
                    
                    
                    <form onSubmit={this.handleSubmit}>
                    <p style={title}>Insurer Name:</p>
                    <input type="text"
                           name="insurer_name"
                           placeholder="Name"
                           value={this.state.insurer_name} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
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
        addingDoctor: state.addingDoctor
        
    })
    
    export default connect(mapStateToProps, {addInsurer}) (AddDoctor);