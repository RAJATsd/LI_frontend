import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import LoginFields from '../../components/login-form/login-form.component';
import Header from '../../components/homepage-header/homepage-header.component';
import './homepage.styles.css';
import CommunityImage from '../../assets/hired.png'

const useStyles = makeStyles({
    domainChip: {
        margin: '8px',
        marginLeft: 0,
        fontSize: '20px',
        color: 'gray',
        fontWeight: 'bold',
        background: 'rgb(221, 221, 221)',
        padding: '0 12px',
        '&:hover': {
            cursor: 'pointer',
            color: 'black',
            background: 'rgb(190, 189, 189)'
        }
    }
});

const HomePage = () => {
    const matClasses = useStyles();
    return (
        <div className='home-page'>
            <Header />
            <div className='home-page-login-area'>
                <div className='home-page-login-area__form'>
                    <h1>
                        Welcome to your
                        <br />
                        professional community
                    </h1>
                    <div style={{ width: '80%' }}>
                        <LoginFields />
                    </div>
                </div>
                <div className='home-page-login-area__image'>
                    <img src={CommunityImage} alt="" />
                </div>
            </div>
            <div className='domain-names'>
                <div className='domain-names__heading'>
                    <h1>
                        Find open jobs <br />
                        and internships
                    </h1>
                </div>
                <div className='domain-names__chips'>
                    <h3>Seggested Searches</h3>
                    <div>
                        <Chip
                            className={matClasses.domainChip}
                            label="Engineering"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Business Development"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Finance"
                            variant="outlined"
                        />
                        <br />
                        <Chip
                            className={matClasses.domainChip}
                            label="Administrative Assistant"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Retail Associate"
                            variant="outlined"
                        />
                        <br />
                        <Chip
                            className={matClasses.domainChip}
                            label="Customer Service"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Operations"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Information Technology"
                            variant="outlined"
                        />
                        <br />
                        <Chip
                            className={matClasses.domainChip}
                            label="Marketing"
                            variant="outlined"
                        />
                        <Chip
                            className={matClasses.domainChip}
                            label="Human Resources"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
            <div className='job-post-banner'>
                <h2>
                    Post your job and find <br />
                    the people you need
                </h2>
                <Chip
                    className={matClasses.domainChip}
                    label="Post a job"
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default HomePage;