import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import './PageNotFound.scss';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <Container fluid="true" className="pagenotfound__container">
        <Header />
        <Row lg={1}>
            <Col>
              <div className="pagenotfound" d-flex justify-content-center>
                <h2 className="pagenotfound__title">Page Not Found</h2> 
                <p className="pagenotfound__text">Click on the Link below to go back to the Home Page</p>
                <p className="pagenotfound__link"><Link to="/">Home page</Link></p>
              </div>
            </Col>
        </Row>
      </Container>
     
    )
  }
}