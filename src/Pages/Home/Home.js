import React from 'react';
import Navbar from '../Shered/Navbar';
import Banner from './Banner';
import Company from './Company';
import Contact from './Contact';
import Industrial from './Industrial';
import MainBanner from './MainBanner';
import SecondBanner from './SecondBanner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Banner></Banner>
            <Services></Services>
            <SecondBanner></SecondBanner>
            <Company></Company>
            <Industrial></Industrial>
            <Contact></Contact>
        </div>
    );
};

export default Home;