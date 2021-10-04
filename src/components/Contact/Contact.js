import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'




const Contact = () => {

    const location = <FontAwesomeIcon icon={faLocationArrow} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />


    return (
        <div className='contact-bg'>
            <div className="contact-overlay p-5 row">
                <div className="col p-5 d-flex flex-column justify-content-around">
                    <div className='d-flex'>
                        <div className="icon me-3">
                            {location}
                        </div>
                        <div className="detail">
                            <p>Office:5, 56 Mason St, New Jersey, USA</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="icon me-3">
                            {email}
                        </div>
                        <div className="detail">
                            <p>edu-palace@gmail.com</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="icon me-3">
                            {phone}
                        </div>
                        <div className="detail">
                            <p>+585869854
                            </p>
                            <p>+564456845</p>
                        </div>
                    </div>
                    <div className='d-flex'>

                    </div>
                </div>
                <div className="col p-5 my-5">
                    <form action="">
                        <input className='form-control mb-2' type="text" placeholder='Your full name' />
                        <input className='form-control mb-2' type="email" placeholder='Email Address' />
                        <small className='text-light'>Type your message</small>
                        <textarea className='form-control mb-2' name="" id="" rows='5'></textarea>

                        <button className='btn btn-info'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;