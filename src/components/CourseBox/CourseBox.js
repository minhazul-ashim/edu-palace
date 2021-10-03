import React from 'react';
import { Card } from 'react-bootstrap';
import './CourseBox.css'

const CourseBox = (props) => {

    const { course, fee, img } = props.course;
    console.log(props.course)

    return (
        <div className='col'>
            <Card className='m-2'>
                <Card.Body>
                    <div className="img-div">
                        <img className='img-fluid course-image' src={img} alt="" />
                    </div>
                    <Card.Title className='my-4'>{course}</Card.Title>
                    <Card.Text className='text-danger'>
                        Course fee: ${fee}
                    </Card.Text>
                    <button className='btn btn-outline-info'>Details</button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseBox;