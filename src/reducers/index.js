import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './alert-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer
});

export default rootReducers;