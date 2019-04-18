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
export const ADD_DOCTOR="ADD_DOCTOR"
export const DOCTOR_ADDED="DOCTOR_ADDED"
export const INSURER_ADDED="INSURER_ADDED"
export const GET_DOCTOR="GET_DOCTOR"
export const GET_DOCTOR_COMPLETE="GET_DOCTOR_COMPLETE"
export const ADD_INSURER="ADD_INSURER"
export const GET_INSURER="GET_INSURER"
export const DELETE_PROCEDURE="DELETE_PROCEDURE"
export const DELETE_SUCCESS="DELETE_SUCCESS"
export const DELETE_DOCTOR="DELETE_DOCTOR"
export const DELETE_INSURER="DELETE_INSURER"



export const register = user => dispatch => {
    console.log("action call, POST", register);
    dispatch({ type: REGISTER });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/auth/registration', user) 
      .then(res => {
        console.log("REGISTERED", res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        getUser();
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



export const getData = (id) => {
    axios
        .get(`https://revolutionize-health.herokuapp.com/api/users${id}`, {
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

export const getUser = () => {
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
        dispatch({ type: PROCEDURE_ADDED, payload: response.data});
      })
      
      
      .catch(err => ({ err }));
      
  };

  export const getProcedures = () => dispatch => {
      console.log("get procedures")
      
	return axios
	  .get(`https://revolutionize-health.herokuapp.com/api/procedures`)
	  .then(response => {
        console.log(response.data);
        dispatch({type: GET_PROCEDURE, payload: response.data})
	    
	  })
	  .catch(err => ({ err }))
	};

    export const deleteProcedure = id => dispatch => {
        dispatch({ type: DELETE_PROCEDURE });
        axios
          .delete(`https://revolutionize-health.herokuapp.com/api/procedures/${id}`)
          .then(response => {
            console.log(response.data);
            
          })
          .catch(err => ({ err }))
        };
   
export const addDoctor = doctor => dispatch => {
    console.log("action call, POST");
    dispatch({ type: ADD_DOCTOR });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/doctors', doctor)
      .then(response => {
        console.log("ADD PROCEDURE", response);
        dispatch({ type: DOCTOR_ADDED, payload: response.data });
        
      })
      .catch(err => ({ err }));
  };

  export const getDoctor = () => dispatch => {
    console.log("get procedures")
    
  return axios
    .get(`https://revolutionize-health.herokuapp.com/api/doctors`)
    .then(response => {
      console.log(response.data);
      dispatch({type: GET_DOCTOR, payload: response.data})
      
    })
    .catch(err => ({ err }))
  };

  export const deleteDoctor = id => dispatch => {
    dispatch({ type: DELETE_DOCTOR });
    axios
      .delete(`https://revolutionize-health.herokuapp.com/api/doctors/${id}`)
      .then(response => {
        console.log(response.data);
        
      })
      .catch(err => ({ err }))
    };


  export const addInsurer = insurer => dispatch => {
    console.log("action call, POST");
    dispatch({ type: ADD_INSURER });
    axios
      .post('https://revolutionize-health.herokuapp.com/api/insurers', insurer)
      .then(response => {
        console.log("ADD INSURER", response);
        dispatch({ type: INSURER_ADDED, payload: response.data });
        
      })
      
      .catch(err => ({ err }));
  };

  export const getInsurer = () => dispatch => {
    console.log("get insurer")
  return axios
    .get(`https://revolutionize-health.herokuapp.com/api/insurers`)
    .then(response => {
      console.log(response.data);
      dispatch({ type: GET_INSURER, payload: response.data });
    })
    .catch(err => ({ err }))
  };

  export const deleteInsurer = id => dispatch => {
    dispatch({ type: DELETE_INSURER });
    axios
      .delete(`https://revolutionize-health.herokuapp.com/api/insurers/${id}`)
      .then(response => {
        console.log(response.data);
        
      })
      .catch(err => ({ err }))
    };