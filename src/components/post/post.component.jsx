import React from 'react';

import PostAdminComponent from './post-admin/post-admin.component';
import PostDescriptionComponent from './post-description/post-description.component';
import PostActionsComponent from './post-actions/post-actions.component';
import './post.styles.css';


const SinglePost = () => {
    return (
        <div className='post'>
            <PostAdminComponent/>
            <PostDescriptionComponent />
            <div className='post-multimedia'>
                <img src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-3.jpg" alt="imageUploaded" />
            </div>
            <PostActionsComponent />
        </div>
    )
}

export default SinglePost;