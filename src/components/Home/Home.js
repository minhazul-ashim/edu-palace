import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

//This component renders the whole home component;

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;