import React from 'react';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/home">Hurry Up Riders</Navbar.Brand>
            <Nav className="mr-auto nav-link">
                <Link to="/home" className="nav-title">Home</Link>
                <Link to="/destination" className="nav-title">Destination</Link>
                <Link to="/blog" className="nav-title">Blog</Link>
                <Link to="/contact" className="nav-title">Contact</Link>
                <Link to="/login" className="nav-title">Login</Link>
            </Nav>
        </Navbar>
    );
};

export default Header;