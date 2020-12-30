import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './login-form.styles.css';

const useStyles = makeStyles({
    formInput: {
        margin: '5px 0'
    },
    formButton:{
        marginTop:'20px',
        borderRadius:'25px'
    }
});

const Login = () => {
    const matStyles = useStyles();
    return (
        <form className='login-form'>
            <TextField
                className={matStyles.formInput}
                label="Email"
                variant="filled"
            />
            <TextField
                className={matStyles.formInput}
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            />
            <Button 
                variant="contained" 
                color="primary"
                className={matStyles.formButton}
                size='large'
            >
                Login
            </Button>
        </form>
    )
}

export default Login;