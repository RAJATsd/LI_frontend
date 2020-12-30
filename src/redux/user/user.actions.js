import userActionTypes from './user.types';

export const loginUser = user => ({
    type:userActionTypes.LOGIN_USER,
    payload : user
});
