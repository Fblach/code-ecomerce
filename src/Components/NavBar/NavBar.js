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
import {Link} from 'react-router-dom'


function NavBar() {

    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to={'/'}><SiApacheecharts size={30} style={{ marginRight: 10, fill: 'white' }} /></Link>
            <Navbar.Brand  style={{ marginLeft: 10}}><Link to={'/'} style={{color: 'white'}}>GonBla</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={'/categoria/remera'} style={{color: 'black'}}>Remeras</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/categoria/camisa'} style={{color: 'black'}}>Camisas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={'/categoria/buzo'} style={{color: 'black'}}>Buzos</Link></NavDropdown.Item>
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