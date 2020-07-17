import userService from '../services/index';
import { alertActions } from '../actions/alert-action';
import { userConstants } from '../constants/user-constant';
import { history } from '../helpers/history';
// import user from '../../../models/user';
 
export const userActions = {
    login,
    signup,
    logout
}

const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(user => {
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    };

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }
    
    function success (user) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    
    function failure (error) {
        return { type: userConstants.LOGIN_FAILURE, error }
    }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

const signup = (user) => {
    return dispatch => {
        dispatch(request(user));

        userService.signup(user)
        .then(
            user => {
                dispatch(success(user));
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user }
    }
    
    function success (user) {
        return { type: userConstants.REGISTER_SUCCESS, user }
    }
    
    function failure (error) {
        return { type: userConstants.REGISTER_FAILURE, error }
    }
}


