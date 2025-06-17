import React from 'react';
import Banner from '../com/Banner';
import LanguageCategory from '../com/LanguageCategory';
import Stats from '../com/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
        </div>
    );
};

export default Home;