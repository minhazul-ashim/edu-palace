import { useEffect, useState } from "react"


//This function is a custom react hook, which is used for getting all the course information;

const useCourses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('/courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return [courses, setCourses]
}

export default useCourses;