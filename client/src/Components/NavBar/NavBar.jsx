import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
   return (
      <div>
         <Navbar bg="none" expand="lg" style={{ marginTop: "0.5rem" }}>
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/conversationapp">Quick Conversation</Nav.Link>
                  <Nav.Link href="/proassistant">Assistant</Nav.Link>
                  <Nav.Link href="/newfeatures">New Features</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default NavBar;