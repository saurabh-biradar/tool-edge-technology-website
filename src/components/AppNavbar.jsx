import { React, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { NavLink as BsNavLink } from "react-bootstrap";
import '../styles/appNavbar.css'

export default function AppNavbar() {
  const [show, setShow] = useState(false);
  const expand = "md";
  console.log(useLocation().pathname);

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand>
            <img
              src={logo}
              className="brandLogo d-inline-block align-top"
              alt="Tool Edge Technology Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShow(true)}/>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={() => setShow(false)}
          >
            <Offcanvas.Header closeButton>
              <Navbar.Brand>
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="Tool Edge Technology Logo"
                />
              </Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="navlinks justify-content-end flex-grow-1 pe-3 me-auto">
                <BsNavLink style={useLocation().pathname === '/' ? { color: '#FFFFFF' } : { color: '#000000' }} activeClassName="menu_active" as={NavLink} to="/" onClick={() => setShow(false)}>Home</BsNavLink>
                <BsNavLink style={useLocation().pathname === '/' ? { color: '#FFFFFF' } : { color: '#000000' }} activeClassName="menu_active" as={NavLink} to="/about" onClick={() => setShow(false)}>About</BsNavLink>
                <BsNavLink style={useLocation().pathname === '/' ? { color: '#FFFFFF' } : { color: '#000000' }} activeClassName="menu_active" as={NavLink} to="/services" onClick={() => setShow(false)}>Services</BsNavLink>
                <BsNavLink style={useLocation().pathname === '/' ? { color: '#FFFFFF' } : { color: '#000000' }} activeClassName="menu_active" as={NavLink} to="/contacts" onClick={() => setShow(false)}>Contacts</BsNavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
