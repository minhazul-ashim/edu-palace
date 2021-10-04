import './EnrollForm.css'
import React from 'react';
import { Form } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';

//No functions or hooks has been used here. All the information are hard coded;

const EnrollForm = () => {

    const [courses] = useCourses();

    console.log(courses)

    return (
        <div className='enroll-bg'>
            <div className="enroll-overlay h-100 mx-auto py-5">
                <form className='w-75 mx-auto p-5' action="">
                    <input className='form-control mb-3' type="text" placeholder='Enter your name' />
                    <input className='form-control mb-3' type="email" placeholder='Enter your email' />
                    <input className='form-control mb-3' type="number" placeholder='Enter your age' />
                    <input className='form-control mb-3' type="number" placeholder='Enter your institution name' />
                    <Form.Select aria-label="Floating label select example" className='mb-2'>
                        <option>Choose your course</option>
                        {
                            courses.map(course => {
                                return <option value="1" key={course.id}>{course.course}</option>
                            })
                        }
                    </Form.Select>
                    <button className='btn btn-danger'> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EnrollForm;