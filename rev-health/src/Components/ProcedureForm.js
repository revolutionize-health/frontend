import React, { Component } from 'react';





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

        render(){
            return(
                <div>
                    <h1>This is the dashboard</h1>
                    <p>User can add, edit or delete procedures</p>
                    <form>
                    <p>Procedure Name:</p>
                    <input type="text"
                           name="procedure_name"
                           placeholder="procedure"
                           value={this.state.procedure} 
                           onChange={this.handleChange}
                           
                           >
                    </input>

                    <p>Hospital:</p>
                    <input type="text"
                           name="hospital name"
                           placeholder="hospital"
                           value={this.state.hospital} 
                           onChange={this.handleChange}
                           
                           >
                    </input>
                    
                    <p>Address:</p>
                    <input type="text"
                           name="address"
                           required="required"
                           placeholder="Address"
                           value={this.state.address} 
                           onChange={this.handleChange}
                           
                           >
                    </input>
                    
                    <p>City:</p>
                    <input type="text"
                           name="city"
                           required="required"
                           placeholder="City"
                           value={this.state.city} 
                           onChange={this.handleChange}
                           
                           >
                    </input>

                    <p>State:</p>
                    <input type="text"
                           name="state"
                           required="required"
                           placeholder="state"
                           value={this.state.state} 
                           onChange={this.handleChange}
                           
                           >
                    </input>

                    <p>Zip:</p>
                    <input type="number"
                           name="zip"
                           required="required"
                           placeholder="zip"
                           value={this.state.zip} 
                           onChange={this.handleChange}
                           
                           >
                    </input>

                    </form>
                </div>
            )
        }
    }



export default ProcedureForm 