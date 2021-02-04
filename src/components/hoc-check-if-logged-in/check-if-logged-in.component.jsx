import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {currentUserSelector} from '../../redux/user/user.selectors'; 

const CheckIfLoggedIn = (WrappedComponent) => {
    const GoOrRedirect = ({currentUser,history}) => (
        currentUser ? 
        (
            <WrappedComponent currentUser={currentUser}/>
        )
        :
        (
            history.push('/signin')
        )
    );
    
    const mapStateToProps = state => ({
        currentUser : currentUserSelector(state)
    })

    return connect(mapStateToProps)(withRouter(GoOrRedirect))
}

export default CheckIfLoggedIn;