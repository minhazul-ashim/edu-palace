import './AboutUs.css'
import React from 'react';
import img from '../../images/about-us.jpg'

//This component renders the About route in the UI;

const AboutUs = () => {
    return (
        <div className=''>
            <div className="row row-cols-2">
                <div className="col p-5">
                    <p className='lead'>Edu Palace is a private educational institution which  works on global education. We provide courses through online and offline instructed by best teacher worldwide. We believe that quality education doesn't require any nationality.</p>
                </div>
                <div className="col">
                    <img src={img} className='img-fluid w-100 h-100' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;