import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {

    let history = useHistory();

    const goToHome = () => {

        history.push('/home')
    }

    return (
        <div className='py-5 d-flex flex-column align-items-center'>
            <h2 className='display-1 text-center'>Error 404</h2>
            <h3 className='text-center'>Page not found</h3>
            <button onClick={goToHome} className='btn btn-outline-secondary'>Go to home</button>
        </div>
    );
};

export default NotFound;