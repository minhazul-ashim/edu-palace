import React from 'react';
import './Navigation.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#home">Edu Palace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/home">Home</Link>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/courses">Courses</Link>
                            <Link className='nav-link' to="/about">Achievements</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;