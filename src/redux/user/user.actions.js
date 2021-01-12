import userActionTypes from './user.types';
import axios from 'axios';
import { globalConstants } from '../../constants';

import {openSnackBarAction} from './../snackbar/snackbar.actions';

export const loginUserStart = () => ({
    type: userActionTypes.LOGIN_USER_START
})

export const loginUserSuccess = (user) => ({
    type: userActionTypes.LOGIN_USER_SUCCESS,
    payload: user
});

export const loginUserFailure = (msg) => ({
    type : userActionTypes.LOGIN_USER_FAILED,
    payload:msg
})

export const loginUserStartAsync = (user) => {
    return async dispatch => {
        try {
            dispatch(loginUserStart());
            const fetchUser = await axios.post(`${globalConstants.baseServerUrl}/auth/signin`, user);
            console.log(fetchUser);
            if (fetchUser.data.success) {
                localStorage.setItem('auth_token',fetchUser.data.userInfo.token)
                dispatch(loginUserSuccess(fetchUser.data.userInfo));
            }
            else {
                dispatch(loginUserFailure(fetchUser.data.msg));
                dispatch(openSnackBarAction({
                    severity:"error",
                    msg : fetchUser.data.msg
                }));
            }
        }
        catch(e)
        {
            dispatch(loginUserFailure("Failed Due To Server"));
            dispatch(openSnackBarAction({
                severity:"error",
                msg : "Failed Due To Server" 
            }));
        }
    }
}

export const loadAlreadyLoggedinUserStartAsync = () => {
    return async dispatch => {
        try {
            const auth_token = localStorage.getItem('auth_token');
            if(!auth_token)
            {
                return;
            }
            dispatch(loginUserStart())
            const fetchUser = await axios.get(`${globalConstants.baseServerUrl}/auth/getUser`, {headers:{authorization:'Bearer '+auth_token}});
            if(fetchUser.data.success) {
                dispatch(loginUserSuccess(fetchUser.data.userInfo));
            }
            else 
            {
                dispatch(loginUserFailure('Unauthorized'));
            }
            console.log('in checking func');
        }
        catch(e)
        {
            console.log('anything');
        }
    }
}

