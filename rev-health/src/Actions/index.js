import axios from "axios"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS ="REGISTER_SUCCESS"




export const register = register => dispatch => {
    console.log("action call, POST");
    dispatch({ type: REGISTER });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/auth/registration', register) 
      .then(response => {
        console.log("REGISTERED", response);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      })
      .catch(err => ({ err }));
  };
