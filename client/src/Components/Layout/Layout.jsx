import React from 'react';
import Container from 'react-bootstrap/Container';
import "./Layout.scss"

export const Layout = (props) => (
        <Container fluid className="layout" style={{ backgroundColor: "lightgray"}}>
                <Container fluid className="sub-layout" >
                        {props.children}
                </Container>
        </Container> 
)