import React from 'react';
import TweetList from './TweetList';
import '../scss/main.scss';


const MainDashboard = () => {
    return (
        <div className='main-dashboard'>
            <TweetList />
        </div>
    )
}

export default MainDashboard;