import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import './sidebar.styles.css';

const useStyles = makeStyles({
    avatar: {
        width: '64px',
        height: '64px',
        display: 'block',
        margin: 'auto',
        zIndex: 0
    }
})

const Sidebar = () => {
    const classes = useStyles()
    return (
        <div className='sidebar'>
            <div className='sidebar-info'>
                <div className='sidebar-info-top'>
                </div>
                <div className='sidebar-info-middle'>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg"
                        className={classes.avatar}
                    />
                    <h3>NAME OF PERSON</h3>
                    <h5>Current Position Of The Person</h5>
                </div>
                <div className='sidebar-info-bottom'>
                    <div className='sidebar-info-bottom__figure'>
                        <h5 className='sidebar-info-bottom__figure__property'>Who viewed your profile</h5>
                        <h5 className='sidebar-info-bottom__figure__number'>65</h5>
                    </div>
                    <div className='sidebar-info-bottom__figure'>
                        <h5 className='sidebar-info-bottom__figure__property'>Views of your post</h5>
                        <h5 className='sidebar-info-bottom__figure__number'>66</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;