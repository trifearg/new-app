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

const linkStyle = {
    marginRight: "10px"
}

const NaviBar: React.FC = () => {
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>LentaRuDemo</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link style={linkStyle} to="/">Главная</Link>
                        <Link style={linkStyle} to="/news">Новости</Link>
                        <Link style={linkStyle} to="/add">Добавить новость</Link>
                    </Nav>
                </Navbar>
            </Styles>
        </>
    )
}

export default NaviBar;