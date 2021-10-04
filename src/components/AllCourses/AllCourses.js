import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseBox from '../CourseBox/CourseBox';

const AllCourses = () => {

    const [courses] = useCourses();

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5">
            {
                courses.map(course => {
                    return <CourseBox key={course.id} course={course}></CourseBox>
                })
            }
        </div>
    );
};

export default AllCourses;