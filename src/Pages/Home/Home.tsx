import React from 'react';
import Areas from './Areas';
import Banner from './Banner';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Featured/>
            <Areas/>
        </div>
    );
};

export default Home;