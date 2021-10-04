import './Courses.css'
import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseBox from '../CourseBox/CourseBox';

const Courses = () => {

    const [courses] = useCourses();
    const sliced = courses.slice(0, 4)

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5">
            {
                sliced.map(course => {
                    return <CourseBox key={course.id} course={course}></CourseBox>
                })
            }
        </div>
    );
};

export default Courses;