import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='banner-img'>
                <div className="banner-overlay banner-text py-5 text-white d-flex flex-column align-items-center">
                    <h2 className='display-5 text-center p-5'>Join us for best education.</h2>
                    <p className='text-center px-3 lead font-weight-light'>We provide generation friedly education through online and offline for you</p>
                    <button className='btn btn-outline-danger'>Join us</button>
                </div>
            </div>
        </>
    );
};

export default Banner;