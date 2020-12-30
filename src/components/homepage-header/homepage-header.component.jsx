import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

import './homepage-header.styles.css';

const useStyles = makeStyles({
    headerButtons: {
        marginLeft: '15px'
    },
    headerButtonBold: {
        fontWeight: 'bold',
        color: '#9e9e9e',
        '&:hover': {
            color: 'black'
        }
    }
});

const HomepageHeader = () => {
    const matClasses = useStyles();
    return (
        <nav className='home-page-nav'>
            <div className='home-page-nav__logo'>
                <a href="/">LI_Clone</a>
            </div>
            <div className='home-page-nav__buttons'>
                <Button
                    className={`${matClasses.headerButtons} ${matClasses.headerButtonBold}`}
                    href='/signup'
                >
                    Join Now
                </Button>
                <Button
                    className={matClasses.headerButtons}
                    style={{ borderRadius: '25px' }}
                    size='large'
                    variant="outlined"
                    color="primary"
                    href='/signin'
                >
                    Sign In
                </Button>
            </div>
        </nav>
    )
}

export default HomepageHeader;