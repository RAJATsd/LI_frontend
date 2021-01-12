import React from 'react';

import './feeds.styles.css';
import FeedPostComponent from '../feed-post/feed-post.component';
import PostComponent from '../post/post.component';

const Feeds = () => {
    return(
        <div className='feeds'>
            <FeedPostComponent />
            <PostComponent />
        </div>
    )
}

export default Feeds;