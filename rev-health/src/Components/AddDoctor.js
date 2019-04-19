import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { addDoctor} from '../Actions';
import DoctorList from './DoctorList'



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
            
        doctor_name:"",
        doctor_website:"",
        hospital_id:"3"

        
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
            this.props.addDoctor(this.state);
               
        }

        render(){
            return(
                <div>
                    
                    
                    <form onSubmit={this.handleSubmit}>
                    <p style={title}>Doctor Name:</p>
                    <input type="text"
                           name="doctor_name"
                           placeholder="Name"
                           value={this.state.doctor_name} 
                           onChange={this.handleChange}
                           style={input}
                           
                           >
                    </input>
                    <p style={title}>Doctors Website:</p>
                    <input type="text"
                            name="doctor_website"
                            placeholder="website"
                            value={this.state.doctor_website}
                            onChange={this.handleChange}
                            style={input}></input>
                    <div style={form}>
                    <div>
                    
                    </div>
                    </div>
                    <Button variant="contained" color="primary" type="submit"  >
                            Add Doctor
                            </Button>

                    </form>
                    <DoctorList/>
                </div>
            )
        }
    }



    const mapStateToProps = state => ({
        addingDoctor: state.addingDoctor
        
    })
    
    export default connect(mapStateToProps, {addDoctor}) (AddDoctor);