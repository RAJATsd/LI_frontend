import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import snackbarReducer from './snackbar/snackbar.reducer';

const rootReducer = combineReducers({
    user:userReducer,
    snackbar:snackbarReducer
});

export default rootReducer;