import React from 'react';
import TextField from '@material-ui/core/TextField';

import './first-login-form.styles.css';

const FirstLoginForm = () => {
    return (
        <div className='first-login-form'>
            <div className='first-login-form__form-one'>
                <h3> General Info</h3>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default FirstLoginForm;