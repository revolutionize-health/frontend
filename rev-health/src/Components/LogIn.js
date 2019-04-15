import React, { Component } from 'react';

class LogIn extends Component {
    
    

    render(){
        return(
            <div>
                <form>
                    <input type="text"
                           name="username"
                           required="required"
                           placeholder="...username"
                           >
                    </input>
                    <input type="password"
                           name="password"
                           required="required"
                           placeholder="...password"
                           >
                    </input>
                    <button type="submit">Log In</button>
                </form>
            
            </div>
        )
    }
}



export default LogIn