import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import './user-header-settings-navigator.styles.css';

const useStyles = makeStyles({
    avatar: {
        width: '52px',
        height: '52px',
        zIndex: 0
    }
})

const SettingsNavigator = ({ hiddenProp }) => {
    const classes = useStyles()
    return (
        <div className={`settings-navigator ${hiddenProp ? 'hidden-nav' : ''}`}>
            <div className='settings-navigator-basic-info'>
                <div className='settings-navigator-basic-info__name'>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg"
                        className={classes.avatar}
                    />
                    <div className='settings-navigator-basic-info__name-content'>
                        <h4>Name</h4>
                        <h5>Current Work</h5>
                    </div>
                </div>
                <button>View Profile</button>
            </div>
            <div className='settings-navigator-account'>
                <h4>
                    Account
                </h4>
                <a href="/#">
                    <h5>
                        Settings & privacy
                    </h5>
                </a>
                <a href="/#">
                    <h5>
                        Help
                    </h5>
                </a>
                <a href="/#">
                    <h5>
                        Language
                    </h5>
                </a>
            </div>
            <div className='settings-navigator-manage'>
                <h4>
                    Account
                </h4>
                <a href="/#">
                    <h5>
                        Post & Activity
                    </h5>
                </a>
                <a href="/#">
                    <h5>
                        My posted jobs
                    </h5>
                </a>
            </div>
            <div className='settings-navigator-logout'>
                <a href="/#">
                    <h5>
                        Signout
                    </h5>
                </a>
            </div>
        </div>
    )
}

export default SettingsNavigator;