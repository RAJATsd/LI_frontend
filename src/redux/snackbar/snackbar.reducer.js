import snackbarTypes from './snackbar.types';

const INITIAL_STATE = {
    open:false,
    severity:"success",
    msg:"hello world"
}

const snackbarReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type)
    {
        case snackbarTypes.SHOW_SNACKBAR:
            return {
                ...state,
                open:true,
                ...action.payload
            }
        case snackbarTypes.CLOSE_SNACKBAR:
            return {
                ...state,
                open:false
            }
        default :
            return state;
    }
}

export default snackbarReducer;