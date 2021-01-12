import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import './feed-post.styles.css';

const FeedPost = () => {
    return (
        <div className='feed-post'>
            <div className='feed-post_start'>
                <CreateOutlinedIcon />
                <h4>Start a post</h4>
            </div>
            <div className='feed-post_uploads'>
                <div className='feed-post_uploads__item'>
                    <PhotoOutlinedIcon style={{color:'rgb(96, 96, 255)'}} />
                    <h5>Photo</h5>
                </div>
                <div className='feed-post_uploads__item'>
                    <PlayCircleOutlineOutlinedIcon style={{color:'rgb(233, 103, 56)'}}/>
                    <h5>Video</h5>
                </div>
                <div className='feed-post_uploads__item'>
                    <AssignmentTurnedInOutlinedIcon style={{color:'rgb(177, 74, 177)'}}/>
                    <h5>Goal</h5>
                </div>
                <div className='feed-post_uploads__item'>
                    <DescriptionOutlinedIcon style={{color:'rgb(233, 103, 56)'}}/>
                    <h5>Write Article</h5>
                </div>
            </div>
        </div>
    )
}

export default FeedPost;