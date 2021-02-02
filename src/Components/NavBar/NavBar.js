import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {SiApacheecharts} from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <a href="#home"><SiApacheecharts href="#home" size={30} style={{ marginRight: 10, fill: 'white' }} /></a>
            <Navbar.Brand  style={{ marginLeft: 10}} href="#home">GonBla</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Camisas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavBar;