import axios from "axios"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS ="REGISTER_SUCCESS"
export const LOGGING_IN ="LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE ="LOGIN_FAILURE"
export const FETCH_DATA="FETCH_DATA"
export const FETCH_COMPLETE="FETCH_COMPLETE"
export const FETCH_FAILURE="FETCH_FAILURE"



export const register = register => dispatch => {
    console.log("action call, POST");
    dispatch({ type: REGISTER });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/auth/registration', register) 
      .then(res => {
        console.log("REGISTERED", res);
        localStorage.setItem('token', res.data.payload);
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
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
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

export const fetchData = () => dispatch => {
    console.log("action call, FETCH")
    dispatch({ type: FETCH_DATA});
    return axios
        .get("https://revolutionize-health.herokuapp.com/api", { headers: { Authorization: localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_COMPLETE, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err})
        })
}