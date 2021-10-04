import useCourses from "./useCourses"

//This function is used for finding a specific course by their id and return the course;

const useCourse = (id) => {

    const [courses] = useCourses();
    return courses.find(course => course.id == id);
}

export default useCourse;