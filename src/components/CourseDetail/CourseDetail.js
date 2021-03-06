import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useCourse from '../../hooks/useCourse';

//This component uses two default hooks and one custom hook 'useCourse' from the 'hook' folder to get the specific course details and show information about the targetted courses;

const CourseDetail = () => {

    const { id } = useParams();
    const course = useCourse(id);
    let history = useHistory();

    const handleViewAll = () => {

        history.push('/courses')
    }

    const handleEnrollment = () => {

        history.push('/enroll')
    }

    if (!course) {
        return <h1 className='text-center'>
            Loading
        </h1>
    } else {
        return (
            <div div >
                <Card className='w-50 mx-auto my-5'>
                    <Card.Img variant="top" src={course.img} className='img-fluid' />
                    <Card.Body>
                        <Card.Title>{course.course}</Card.Title>
                        <Card.Text>
                            Course fee: ${course.fee}
                        </Card.Text>
                        <Card.Text>Duration: {course.duration}</Card.Text>
                        <small>
                            Certification: {course.certification}
                        </small>
                        <br />
                        <small><strong>Vision: {course.vision}</strong></small>
                        <br />
                        <small>Course Featured</small>
                        <ul>
                            {
                                course.features.map(feature => {
                                    return <li key={Math.random() * 5}><small>{feature}</small></li>
                                })
                            }
                        </ul>

                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-between'>
                        <button onClick={handleEnrollment} className='btn btn-danger'>Enroll</button>
                        <button onClick={handleViewAll} className='btn btn-info'>View others</button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
};

export default CourseDetail;