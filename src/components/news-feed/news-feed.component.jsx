import React from 'react';

import './news-feed.styles.css';

const NewsFeed = () => {
    return(
        <div className='news-feed'>
            <div className='news-feed-main'>
                <h4>LI News</h4>
                <div className='news-feed-main-list_container'>
                    <ul className='news-feed-main-list'>
                        <li>This is developed by rajat</li>
                        <li>His email id is rajatsharmaatri@gmail.com</li>
                        <li>Please somone give him 20 LPA</li>
                        <li>15 LPA will also work</li>
                        <li>Wanna meet, visit kkr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;