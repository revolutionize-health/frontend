import React from 'react';
import { connect } from 'react-redux';
import { login } from '../Actions';

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
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="email"
                        required='required'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="email..."
                    />

                    <input 
                        type="password"
                        name="password"
                        required='required'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password..."
                    />
                    <button >SUBMIT</button>
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