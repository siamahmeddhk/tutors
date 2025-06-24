import React from 'react';
import Banner from '../com/Banner';
import LanguageCategory from '../com/LanguageCategory';
import Stats from '../com/Stats';
import Visa from '../com/Visa';
import OfflineCare from '../com/OfflineCare';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
            <OfflineCare></OfflineCare>
            <Visa></Visa>
        </div>
    );
};

export default Home;