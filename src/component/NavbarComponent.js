import React from "react";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

const NavbarComponent = () => {
    return(
        <Navbar variant="dark" expand="lg">
            <Container>
                <Container>
                    <Navbar.Brand href="/" className="my-app">My-App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Detail Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>    
                        <Nav.Link href="#home">Riwayat Transaksi</Nav.Link>
                        <Nav.Link href="/sukses">Success Message</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>   
        </Container>
    </Navbar>
    )
}

export default NavbarComponent;