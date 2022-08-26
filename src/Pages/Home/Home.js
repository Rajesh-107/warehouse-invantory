import React from 'react';
import Navbar from '../Shered/Navbar';
import Banner from './Banner';
import Company from './Company';
import Industrial from './Industrial';
import SecondBanner from './SecondBanner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <SecondBanner></SecondBanner>
            <Company></Company>
            <Industrial></Industrial>
        </div>
    );
};

export default Home;