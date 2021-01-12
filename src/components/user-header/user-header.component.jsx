import React,{useState} from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import SettingsNavigatorComponent from './user-header-settings-navigator/user-header-settings-navigator.component';
import './user-header.styles.css';

const useStyles = makeStyles({
    icons: {
        color: 'inherit'
    },
    avatar: {
        width: '24px',
        height: '24px',
        display: 'block',
        margin: 'auto',
        zIndex: 0
    }
})


const UserHeader = () => {
    const [hidden,setHidden] = useState(true);
    const classes = useStyles();
    return (
        <nav className='user-header'>
            <div className='user-header-logo_and_searchfield'>
                <div className='user-header__logo'>
                    <a href="/">LI_Clone</a>
                </div>
                <div className='user-header_search'>
                    <input type="text" placeholder="Search" name="search-field" />
                </div>
            </div>
            <div className='user-header__buttons'>
                <div className='user-header__buttons__button'>
                    <HomeRoundedIcon className={classes.icons} />
                    <h5>Home</h5>
                </div>
                <div className='user-header__buttons__button'>
                    <GroupAddRoundedIcon className={classes.icons} />
                    <h5>My Network</h5>
                </div>
                <div className='user-header__buttons__button'>
                    <SmsRoundedIcon className={classes.icons} />
                    <h5>Messages</h5>
                </div>
                <div className='user-header__buttons__button'>
                    <NotificationsRoundedIcon className={classes.icons} />
                    <h5>Notifications</h5>
                </div>
                <div className='user-header__buttons-and-navigator'>
                    <div className='user-header__buttons__button user-header__buttons__button-last' onClick={()=>setHidden(!hidden)}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg"
                            className={classes.avatar}
                        />
                        <h5>Me ▼</h5>
                    </div>
                    <SettingsNavigatorComponent hiddenProp={hidden} />
                </div>
            </div>
        </nav>
    )
}

export default UserHeader;