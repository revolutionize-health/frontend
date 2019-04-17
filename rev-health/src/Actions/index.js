import axios from "axios"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS ="REGISTER_SUCCESS"
export const LOGGING_IN ="LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE ="LOGIN_FAILURE"
export const FETCH_DATA="FETCH_DATA"
export const FETCH_COMPLETE="FETCH_COMPLETE"
export const FETCH_FAILURE="FETCH_FAILURE"
export const ADD_PROCEDURE="ADD_PROCEDURE"
export const PROCEDURE_ADDED="PROCEDURE_ADDED"
export const GET_PROCEDURE="GET_PROCEDURE"
export const GET_COMPLETE="GET_COMPLETE"
export const GET_FAILURE="GET_FAILURE"



export const register = user => dispatch => {
    console.log("action call, POST", register);
    dispatch({ type: REGISTER });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/auth/registration', user) 
      .then(res => {
        console.log("REGISTERED", res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      })
      .catch(err => ({ err }));
  };

  export const login = creds => dispatch => {
    console.log("action call, LOGGING_IN")
    dispatch({ type: LOGGING_IN});
    return axios
        .post("https://revolutionize-health.herokuapp.com/api/auth/login", creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token});
            getData();     
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })
}

export const getData = () => {
    axios
        .get("https://revolutionize-health.herokuapp.com/api/auth/login", {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export const addProcedure = procedure => dispatch => {
    console.log("action call, POST");
    dispatch({ type: ADD_PROCEDURE });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/procedures', procedure)
      .then(response => {
        console.log("ADD PROCEDURE", response);
        dispatch({ type: PROCEDURE_ADDED, payload: response.data });
        getProcedure();
      })
      
     

      .catch(err => ({ err }));
  };

  export const getProcedure = () => dispatch => {
    console.log("action call, FETCH")
    dispatch({ type: GET_PROCEDURE});
    return axios
        .get("https://revolutionize-health.herokuapp.com/api/procedures")
        .then(res => {
            console.log(res)
            dispatch({ type: GET_COMPLETE, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_FAILURE, payload: err})
        })
}