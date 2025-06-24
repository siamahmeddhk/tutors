import React from 'react';
import Banner from '../com/Banner';
import LanguageCategory from '../com/LanguageCategory';
import Stats from '../com/Stats';
import Visa from '../com/Visa';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
            <Visa></Visa>
        </div>
    );
};

export default Home;