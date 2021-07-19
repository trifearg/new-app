import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
        color:white
    }
}
`
export default function NaviBar() {
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>LentaRuDemo</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/news">Новости</Link></Nav.Link>
                        <Nav.Link><Link to="/perinfo">Профиль</Link></Nav.Link>
                    </Nav>
                </Navbar>
            </Styles>
        </>
    )
}