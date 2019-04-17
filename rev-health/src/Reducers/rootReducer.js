import {
    REGISTER,
    REGISTER_SUCCESS,
    ADD_PROCEDURE,
    PROCEDURE_ADDED,
    GET_PROCEDURE,
    GET_COMPLETE,
    GET_FAILURE,
    ADD_DOCTOR,
    DOCTOR_ADDED,
    INSURER_ADDED,
    ADD_INSURER,
    DELETE_PROCEDURE,
    DELETE_SUCCESS
} from '../Actions';

const initialState = {
    savingUser: false,
    user: [],
    loggingIn: false,
    updatingProcedure: false,
    addingProcedure: false,
    error: null,
    procedures: [],
    gettingProcedures: false,
    deletingProcedures: false,
    addingDoctor:false,
    addingInsurer:false,
    doctors:[],

  
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        

        case REGISTER:
        
            return {
                ...state,
                register: action.payload
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case ADD_PROCEDURE:
            return {
               ...state,
               addingProcedure: true 
            }
        case PROCEDURE_ADDED:
            return {
                ...state,
                addingProcedure: false,
                gettingProcedures: true
            }

        case GET_PROCEDURE:
            return {
               ...state,
               procedures: action.payload,
                gettingProcedures: true
                
            }
        case GET_COMPLETE:
            return {
               ...state,
               procedures: action.payload
            }
        case DELETE_PROCEDURE:
        return {...state,  deletingProcedures: true }

       

        case GET_FAILURE:
            return {
               
              
            }

        case ADD_DOCTOR:
            return {
               ...state,
               addingDoctor: true 
            }

        case DOCTOR_ADDED:
            return {
                ...state,
                addingDoctor: false
            }

            case ADD_INSURER:
            return{
                addingInsurer: true
            }
            
            case INSURER_ADDED:
            return {
                ...state,
                addingInsurer: false
                
            }
         
           

    default: return state;    
    }
    
}

export default rootReducer;