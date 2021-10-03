import useCourses from "./useCourses"

const useCourse = (id) => {

    const [courses] = useCourses();
    return courses.find( course => course.id == id);
}

export default useCourse;