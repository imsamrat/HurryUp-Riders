import React from 'react';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/home">Hurry Up Riders</Navbar.Brand>
            <Nav className="mr-auto nav-link">
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </Nav>
        </Navbar>
    );
};

export default Header;