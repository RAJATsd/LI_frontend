import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import './post-admin.styles.css';


const useStyles = makeStyles({
    avatar: {
        width: '52px',
        height: '52px',
        display: 'block',
        margin: 'auto',
        zIndex: 0
    }
})


const PostAdmin = () => {
    const classes = useStyles();
    return (
        <div className='post-admin'>
            <div className='post-admin-avatar'>
                <Avatar
                    alt="Remy Sharp"
                    src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg"
                    className={classes.avatar}
                />
            </div>
            <div className='post-admin-info'>
                <h5>NAME OF PERSON</h5>
                <h6>Current position of the person</h6>
            </div>
        </div>
    )
}

export default PostAdmin;