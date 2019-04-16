import React, { Component } from 'react';
import Button from "@material-ui/core/Button";



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
        hospital:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        dr_name:"",
        website: "",
        hospital_name:"",
        hsopital_id: "",
        total_cost:"",
        insurance_pmt:"",
        insurance_adj:"",
        out_of_pkt:""
        
    }
}

        handleChange = event => {
            this.setState({
            
                ...this.state,
                [event.target.name]: event.target.value
            
            });
        };

        handleSubmit = event => {
            this.setState(
                ...this.state,""
            )
        }

        render(){
            return(
                <div>
                    
                    
                    <form >
                    <p style={title}>Procedure Name:</p>
                    <input type="text"
                           name="procedure_name"
                           placeholder="procedure"
                           value={this.state.procedure} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    <div style={form}>
                    <div>
                    <p style={title}>Hospital:</p>
                    <input type="text"
                           name="hospital_name"
                           placeholder="hospital"
                           value={this.state.hospital_name} 
                           onChange={this.handleChange}
                           style={input}

                           
                           >
                    </input>
                    
                    <p style={title}>Address:</p>
                    <input type="text"
                           name="address"
                           required="required"
                           placeholder="Address"
                           value={this.state.address} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    
                    <p style={title}>City:</p>
                    <input type="text"
                           name="city"
                           required="required"
                           placeholder="City"
                           value={this.state.city} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>

                    <p style={title}>State:</p>
                    <input type="text"
                           name="state"
                           required="required"
                           placeholder="state"
                           value={this.state.state} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    <p style={title}>Zip:</p>
                    <input type="number"
                           name="zip"
                           required="required"
                           placeholder="zip"
                           value={this.state.zip} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    </div>
                    <div>
                    <p style={title}>Dr. Name:</p>
                    <input type="text"
                           name="dr_name"
                           required="required"
                           placeholder="Dr. Name"
                           value={this.state.dr_name} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    <p style={title}>Dr. Website:</p>
                    <input type="text"
                           name="website"
                           placeholder="website"
                           value={this.state.website} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    </div>
                    </div>
                    <Button variant="contained" color="primary">
                            Add Procedure
                            </Button>

                    </form>
                </div>
            )
        }
    }



export default ProcedureForm 