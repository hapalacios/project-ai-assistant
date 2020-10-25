import React from 'react'
import "./Header.scss";
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
        <header className="header">
            <Container>
               <Row>
                  <Col> 
                      <Logo />
                  </Col>
                  <Col>
                     <NavBar />
                  </Col>  
              </Row> 
            </Container>
        </header>
    )
}

function Logo() {
    return (
        <Link className="header__logo-link" to="/">
            <img className="header__logo" src={process.env.PUBLIC_URL + '/assets/logo/logo.svg'}
                alt="Go back to Home Page!" />
        </Link>
    )
};