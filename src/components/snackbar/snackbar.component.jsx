import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


import { closeSnackBarAction } from '../../redux/snackbar/snackbar.actions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const SnackBarComponent = ({ snackbarState, closeSnackbar }) => {
    const classes = useStyles();

    const handleClose = (event) => {
        closeSnackbar();
    };

    return (
        <div className={classes.root}>
            <Snackbar open={snackbarState.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarState.severity}>
                    {snackbarState.msg}
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps = state => ({
    snackbarState: state.snackbar
});

const mapDispatchToProps = dispatch => ({
    closeSnackbar: () => dispatch(closeSnackBarAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBarComponent);