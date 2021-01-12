import snackbarTypes from './snackbar.types';

export const openSnackBarAction = (payload) => ({
    type:snackbarTypes.SHOW_SNACKBAR,
    payload:payload
});

export const closeSnackBarAction = () => ({
    type:snackbarTypes.CLOSE_SNACKBAR
});