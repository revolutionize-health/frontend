import React from 'react';
import { connect } from 'react-redux';
import { login } from '../Actions';
import Button from "@material-ui/core/Button";
import './Components.css';



const mainDiv={
    display:'flex',
    justifyContent:'center'
}
const img={
    height: '50%',
    width: '50%'
}

const input = {
    border: 'none',
    borderBottom: '2px solid black',
    width: '200px',
    height: '25px',
    marginBottom: '10px'
}

const title={
    fontSize: '1rem',
    textDecoration: 'underine'
    
}
class LogIn extends React.Component{
    state = {
        credentials: {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    }
    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/dashboard');
            })
           
    }

    render(){
        return (
            <div style={mainDiv}>
                <form className='card-1' onSubmit={this.login}>
                
                
                <p style={title}>E-mail:</p>
                    <input style={input}
                        type="text"
                        name="email"
                        required='required'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="email..."
                    />
                    <p style={title}>Password:</p>
                    <input 
                        style={input}
                        type="password"
                        name="password"
                        required='required'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password..."
                    />
                   <Button variant="contained" color= "#AD8E40" type="submit">
                            Log In
                            </Button>
                    {this.props.loggingIn ? (
                            <h1>Loggin In</h1>
                        ) : (
                            null
                        )
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    data: state.data
})

export default connect(mapStateToProps, {login}) (LogIn);

