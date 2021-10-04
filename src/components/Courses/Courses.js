import './Courses.css'
import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseBox from '../CourseBox/CourseBox';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Courses = () => {

    const [courses] = useCourses();
    const sliced = courses.slice(0, 4);
    const arrow = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <>
            <h2 className='text-center mt-3 display-6'>Our Courses</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5">
                {
                    sliced.map(course => {
                        return <CourseBox key={course.id} course={course}></CourseBox>
                    })
                }
            </div>
            <Link to='/courses' className='text-decoration-none '><h6 className='text-center mb-5'>View All {arrow}</h6></Link>
        </>
    );
};

export default Courses;