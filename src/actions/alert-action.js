import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message){
    return { type: alertConstants.SUCCESS, message };
}

function error(message){
    return { type: alertContants.ERROR, message };
}

function clear(){
    return { type: alertConstants.CLEAR };
}
