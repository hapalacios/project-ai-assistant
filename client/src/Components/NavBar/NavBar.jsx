import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

function NavBar() {
   return (
      <div>
         <Navbar bg="none" expand="lg" style={{ marginTop: "0.5rem"}}>
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/conversationapp">Quick Conversation</Nav.Link>
                  <Nav.Link href="/proassistant">Assistant</Nav.Link>
                  <NavDropdown title="New" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/newfeatures/teacherassistant">Teacher Assistant</NavDropdown.Item>
                     <NavDropdown.Item href="/newfeatures/mentalassistant">Mental Health Assistant</NavDropdown.Item>
                     <NavDropdown.Item href="/newfeatures/drivingassistant">Driving Assistant</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Other projects</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">About</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default NavBar;