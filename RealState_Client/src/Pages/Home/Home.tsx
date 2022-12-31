import React from 'react';
import Areas from './Areas';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Clients from './Clients';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Featured/>
            <Areas/>
            <ChooseUs/>
            <Clients/>
        </div>
    );
};

export default Home;