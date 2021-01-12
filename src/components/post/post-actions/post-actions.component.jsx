import React from 'react';

import './post-actions.styles.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const PostActions = () => {
    return (
        <div className='post-actions'>
            <div className='post-actions-action'>
                <ThumbUpOutlinedIcon />
                <h5>Like</h5>
            </div>
            <div className='post-actions-action'>
                <SmsOutlinedIcon />
                <h5>Comment</h5>
            </div>
            <div className='post-actions-action'>
                <ShareOutlinedIcon />
                <h5>Share</h5>
            </div>
            <div className='post-actions-action'>
                <SendOutlinedIcon />
                <h5>Send</h5>
            </div>
        </div>
    )
}

export default PostActions;