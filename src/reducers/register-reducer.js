import { userConstants } from '../constants/user-constant';

export function registeration(state={}, action){
    switch(action.type) {
        case userConstants.SIGNUP_REQUEST:
            return { registering: true };
        case userConstants.SIGNUP_SUCCESS:
            return {};
        case userConstants.SIGNUP_FAILURE:
            return {};
        default:
            return state    
    }
}