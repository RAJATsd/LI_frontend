import React,{useState} from 'react';

import './post-description.styles.css';


const demoText = "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const lengthOfText = demoText.length;

const PostDescription = () => {
    const [readMore,setReadMore ] = useState(true);
    return (
        <div className='post-description'>
            <h4>
                {
                    lengthOfText > 100 ?
                        (
                            readMore ? (
                                <div className='post-desciption-text'>
                                    {demoText.substring(0, 140) + '...'}
                                    <button onClick={() => setReadMore(false)}>Read More</button>
                                </div>
                            )
                                :
                                (
                                    <div className='post-desciption-text'>
                                        {demoText}
                                        <button onClick={() => setReadMore(true)}>Read Less</button>
                                    </div>
                                )
                        )
                        :
                        (demoText)
                }
            </h4>
        </div>
    )
}

export default PostDescription;