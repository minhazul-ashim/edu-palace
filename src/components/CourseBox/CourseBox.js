import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './CourseBox.css'

const CourseBox = (props) => {

    const { id, course, fee, img } = props.course;
    let history = useHistory()


    const handleDetail = () => {

        history.push(`course/${id}`)
    }

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
                    <button onClick={handleDetail} className='btn btn-outline-info'>Details</button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CourseBox;