import React, { Component } from 'react';


const form = {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center'
    
}

const input = {
    border: 'none',
    borderBottom: '2px solid black',
    width: '200px',
    height: '25px',
    marginBottom: '25px'
}

const title={
    fontSize: '1.2rem',
    textDecoration: 'underine'
    
}


class Register extends Component {
   

    render(){
        return(
            <div>
                <h1>Welcome to Revolutionize Health</h1> 
               <p>Creating an account will allow you to add and edit procedures, helping to grow our database and allowing our memebers to find the most affordable hospitals and doctors in their area. </p>
               <h3>We are just going to need to gather a little information from you!</h3>
               <p>We promise it will be quick and painless!</p>
               <form style={form}>
                   
                    <p style={title}>Name:</p>
                    <input type="text"
                           name="name"
                           required="required"
                           placeholder="Name"
                           style={input}
                           >
                    </input>
                    
                    
                    <p style={title}>Email:</p>
                    <input type="email"
                           name="email"
                           required="required"
                           placeholder="Email"
                           style={input}
                           >
                    </input>
                    
                    <p style={title}>New Username:</p>
                    <input type="text"
                           name="username"
                           required="required"
                           placeholder="Username"
                           style={input}
                           >
                    </input>
                    
                    <p style={title}>New Password:</p>
                    <input type="password"
                           name="password"
                           required="required"
                           placeholder="Password"
                           style={input}
                           >
                    </input>
                    
                    <p style={title}>Verify Password Password:</p>
                    <input type="password"
                           name="password"
                           required="required"
                           placeholder="Verify Password"
                           style={input}
                           >
                    </input>
                    
                  

                </form>
               

            </div>
        )
    }
}



export default Register