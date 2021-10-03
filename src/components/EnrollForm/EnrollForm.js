import './EnrollForm.css'
import React from 'react';

const EnrollForm = () => {
    return (
        <div className='enroll-bg'>
            <div className="enroll-overlay h-100 mx-auto py-5">
                <form className='w-50 mx-auto p-5' action="">
                    <input className='form-control mb-3' type="text" placeholder='Enter your name' />
                    <input className='form-control mb-3' type="email" placeholder='Enter your email' />
                    <input className='form-control mb-3' type="number" placeholder='Enter your age' />
                    <input className='form-control mb-3' type="number" placeholder='Enter your institution name' />
                    <button className='btn btn-danger'> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EnrollForm;