import {
    REGISTER,
    REGISTER_SUCCESS,
    ADD_PROCEDURE,
    PROCEDURE_ADDED,
    GET_PROCEDURE,
    GET_COMPLETE,
    GET_FAILURE
    
   

} from '../Actions';

const initialState = {
    deletingPost: false,
    fetchingPosts: false,
    user: [],
    loggingIn: false,
    savingUser: false,
    updatingProcedure: false,
    addingProcedure: false,
    error: null,
    procedures: [],
  
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
                addingProcedure: false
            }

        case GET_PROCEDURE:
            return {
                ...state,
                
            }
        case GET_COMPLETE:
            return {
               ...state,
               procedure: action.payload
            }

        case GET_FAILURE:
            return {
               
              
            }
            
         
           

    default: return state;    
    }
    
}

export default rootReducer;