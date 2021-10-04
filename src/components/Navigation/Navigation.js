import React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//This component renders the navigation bar. React bootstrap Navbar component used here for the structure. The routes are navigated to their destination by using the 'Link' of react router dom; Codes are hard coded;

const Navigation = () => {
    return (
        <div>
            <Navbar bg="primary" variant='dark' expand="md">
                <Container>
                    <Navbar.Brand href="#home">Edu Palace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/home">Home</Link>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/courses">Courses</Link>
                            <Link className='nav-link' to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;