import {
    REGISTER,
    REGISTER_SUCCESS
    
   

} from '../Actions';

const initialState = {
    deletingPost: false,
    fetchingPosts: false,
    register: [],
    loggingIn: false,
    savingUser: false,
    updatingProcedure: false,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        

        case REGISTER:
        
            return {
                ...state,
                savingUser: !state.savingUser
            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                register: action.payload
            }

            
         
           

    default: return state;    
    }
    
}

export default rootReducer;