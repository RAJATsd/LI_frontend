import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import './user-home.styles.css';
import HeaderComponent from '../../components/user-header/user-header.component';
import SidebarComponent from '../../components/sidebar/sidebar.component';
import FeedComponent from '../../components/feeds/feeds.component';
import NewsFeedComponent from '../../components/news-feed/news-feed.component';
import FirstLoginForComponent from '../../components/first-login-form/first-login-form.component';
import { currentUserSelector } from '../../redux/user/user.selectors';
import {loadAlreadyLoggedinUserStartAsync} from '../../redux/user/user.actions';

const UserHome = ({ currentUser , history , loadIfAreadyLoggedIn }) => {
    useEffect(()=>{

        if(!currentUser)
        {
            console.log('fetching for already')
            loadIfAreadyLoggedIn();
        }
        
        console.log('mid of both')
        if(!currentUser)
        {
            history.push('/login')
        }
    },[])
    return (
        <div>
            <HeaderComponent />
            {
                currentUser ?
                    (
                        <FirstLoginForComponent />
                    )
                    :
                    (
                        <div className='user-homepage'>
                            <SidebarComponent />
                            <FeedComponent />
                            <NewsFeedComponent />
                        </div>
                    )
            }
        </div>

    )
}

const mapStateToProps = state => ({
    currentUser: currentUserSelector(state)
});

const mapDispatchToProps = dispatch => ({
    loadIfAreadyLoggedIn : () => dispatch(loadAlreadyLoggedinUserStartAsync()) 
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserHome));