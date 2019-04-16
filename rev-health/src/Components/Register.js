import React, { Component } from 'react';
import { connect } from "react-redux";
import {register} from "../Actions";
import Button from "@material-ui/core/Button";
import './Components.css';



const mainDiv = {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center'
    
}

const input = {
    border: 'none',
    borderBottom: '2px solid black',
    width: '300px',
    height: '25px',
    marginBottom: '10px'
}

const title={
    fontSize: '1rem',
    textDecoration: 'underine'
    
}


class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            
            first_name:"",
            last_name:"",
            email: "",
            password: ""
            
        }
    }

    handleChange = event => {
        this.setState({
          
            ...this.state,
            [event.target.name]: event.target.value
         
        });
      };

      submitHandle = event => {
        event.preventDefault();
        this.props.register(this.state);
        alert('Working')
        console.log('state', this.state)
        
      
      };


    render(){
        return(
            <div style={mainDiv} >
               <h3>We are just going to need to gather a little information from you!</h3>
               <p>We promise it will be quick and painless!</p>
               <form className="card-1" onSubmit={this.submitHandle}>
                   
                    <p style={title}>First Name:</p>
                    <input type="text"
                           name="first_name"
                           
                           placeholder="First Name"
                           value={this.state.first_name} 
                           onChange={this.handleChange}
                           style={input}
                           >
                    </input>

                    <p style={title}>Last Name:</p>
                    <input type="text"
                           name="last_name"
                           
                           placeholder="Last Name"
                           value={this.state.last_name} 
                           onChange={this.handleChange}
                           style={input}
                           >
                    </input>
                    
                    
                    <p style={title}>Email:</p>
                    <input type="email"
                           name="email"
                           required="required"
                           placeholder="Email"
                           value={this.state.email} 
                           onChange={this.handleChange}
                           style={input}
                           >
                    </input>
                    
                    <p style={title}>New Password:</p>
                    <input type="password"
                           name="password"
                           required="required"
                           placeholder="Password"
                           value={this.state.password} 
                           onChange={this.handleChange}
                           style={input}
                           >
                    </input>
                    <span style={title}>Currently Insured?</span>
                    <input type="checkbox"></input>
                    
                    <Button variant="contained" color="primary">
                            Register User
                            </Button>
                </form>
               

            </div>
        )
    }
}

const mapStateToProps = state => (
    
    {
      register: state.register
    }
  );
  
  export default connect(
    mapStateToProps,
    {
     
      register,
      
    }
  )(Register);