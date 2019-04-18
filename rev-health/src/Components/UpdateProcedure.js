import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateProcedure } from '../Actions'
import Button from "@material-ui/core/Button";



const form = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
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

class UpdateProcedure extends Component {

    constructor(props) {
        super(props)
        this.state = {
            procedure_name: '',
            cost: '',
            
            
        }
    }
    componentDidMount() {
        const {procedures, match} = this.props
        const procedure = procedures.find(procedures => procedures.id === Number(match.params.id))
        this.setState(procedures)
    }

    inputHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = event=> {
        event.preventDefault()
        this.props.updateProcedure(this.state)
        alert("Your procedure has updated");
        console.log (this.state)
    }

    render() {
        return (
            
            <form style={form} onSubmit={this.submitHandler}>
                <input style={input} type="text" name='procedure_name' value={this.state.procedure_name} onChange={this.inputHandler} placeholder='new name' />
                <input style={input}type="number" name='cost' value={this.state.cost} onChange={this.inputHandler} placeholder='new cost' />
                <Button variant="contained" color="primary" type="submit">
                            Update
                            </Button>
            </form>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        procedures: state.procedures
    }
}

export default connect(mapStateToProps, 

    { updateProcedure: updateProcedure }

    )(UpdateProcedure)