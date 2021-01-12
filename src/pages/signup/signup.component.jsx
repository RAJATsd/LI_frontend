import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { globalConstants } from '../../constants';

import Header from '../../components/homepage-header/homepage-header.component';
import './signup.styles.css';

const useStyles = makeStyles({
    formInput: {
        margin: '5px 0'
    },
    formButton: {
        marginTop: '20px',
        borderRadius: '25px'
    }
});

const Signup = ({history}) => {
    const matStyles = useStyles();
    const [signupInfo, setSignupInfo] = useState({
        'email': '',
        'password': '',
        'confirmPassword': '',
        'name': ''
    });

    const handleChangeEvent = async (event) => {
        const { value, name } = event.target;
        setSignupInfo({
            ...signupInfo,
            [name]: value
        });
    }

    const handleButtonSubmit = async () => {
        if (signupInfo.password !== signupInfo.confirmPassword) {
            return;
        }
        const user = {
            ...signupInfo
        }
        console.log(user);
        const signup = await axios.post(`${globalConstants.baseServerUrl}/auth/signup`,user );
        if(signup.data.success)
        {
            history.push('/signin');
        }
    }

    return (
        <div className='signup-page'>
            <Header />
            <div className='signup-page-content'>
                <h3>
                    Make the most of your professional life
                </h3>
                <div className='signup-page-content__form'>
                    <TextField
                        className={matStyles.formInput}
                        label="User Name"
                        variant="filled"
                        type="text"
                        onChange={handleChangeEvent}
                        name='name'
                    />
                    <TextField
                        className={matStyles.formInput}
                        label="Email"
                        variant="filled"
                        type="email"
                        onChange={handleChangeEvent}
                        name='email'
                    />
                    <TextField
                        className={matStyles.formInput}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={handleChangeEvent}
                        name='password'
                    />
                    <TextField
                        className={matStyles.formInput}
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={handleChangeEvent}
                        name='confirmPassword'
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={matStyles.formButton}
                        size='large'
                        onClick={handleButtonSubmit}
                    >
                        Signup
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Signup);