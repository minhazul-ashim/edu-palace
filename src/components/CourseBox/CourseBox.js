import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './CourseBox.css';

//This component renders all the individuals courses. This component receives props from the 'Courses' and 'All Courses' component which is used to show course information in the UI. Note: Dynamic Routing is used here;

const CourseBox = (props) => {

    const { id, course, fee, img } = props.course;
    let history = useHistory()


    const handleDetail = () => {

        history.push(`course/${id}`)
    }

    return (
        <div className='col'>
            <Card className='m-2 shadow-lg'>
                <Card.Body>
                    <div className="img-div">
                        <img className='img-fluid course-image' src={img} alt="" />
                    </div>
                    <Card.Title className='my-4'>{course}</Card.Title>
                    <Card.Text className='text-danger'>
                        Course fee: ${fee}
                    </Card.Text>
                    <button onClick={handleDetail} className='btn btn-outline-info'>Details</button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseBox;