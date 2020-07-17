import { alertConstants } from '../constants/alert-constant';

const alertReducer = (state = {}, action) => {
    switch(action.type){
        case alertConstants.SUCCESS:
            return {
                types: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default: 
            return state;
    }
}

export default alertReducer;