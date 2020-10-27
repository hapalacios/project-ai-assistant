import React  from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';

export default class Home extends React.Component {
    state = {
        firstRender: true, alanBtnHidden: true, alanBtnInstance: null
    }
    componentDidMount() {
        this.alanBtnInstance = alanBtn({
            key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:conversation') {
                    this.props.history.push("/conversationapp")
                } else if (commandData.command === 'go:assistant'){
                    this.props.history.push("/proassistant")
                } else if (commandData.command === 'go:newfeatures') {
                    this.props.history.push("/newfeatures")
                } else if (commandData.command === 'go:teacherassistant') {
                    this.props.history.push("/newfeatures/teacherassistant")
                } else if (commandData.command === 'go:about') {
                    this.props.history.push("/about")
                }  
            },
        });
    }
    render() {
        let menu = <div className="menu">
                    <Container fluid style={{ height: '88vh' }}>
                        <Row md={1} lg={1} style={{ height: '3rem' }} >
                        </Row>
                        <Row md ={2} lg={4} >
                             <Col xs={6} md={4} >
                                <Card bg={'light'} text={'dark'} style={{  width: '18rem' }}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/conversation.jpg'} />
                                    <Card.Body>
                                        <Card.Title>Conversation App</Card.Title>
                                        <Card.Text>
                                            A quick example on how to have a real conversation with an
                                            ai API.
                                        </Card.Text>
                                        <Link className="home__conversation-app-link" to="/conversationapp">
                                            <Button variant="primary">Go Conversation App</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card bg={'light'} text={'dark'} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/assistant.jpg'} />
                                    <Card.Body>
                                        <Card.Title>Professional-Ai Assistant</Card.Title>
                                        <Card.Text>
                                            Ai assistant that is going to help you with information about news, weather, time,
                                            tasks; and also writing text only using your voice.
                                        </Card.Text>
                                        <Link className="home__proassistant-link" to="/proassistant">
                                            <Button variant="primary">Go Professional Assistant</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={4}>                                
                                 <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/new-features.jpg'} />
                                        <Card.Body>
                                            <Card.Title>New Features</Card.Title>
                                            <Card.Text>
                                                Future features and projects using Alan AI.
                                                E.g. Teacher assistant, mental health assistant, driving assistant, etc.
                                            </Card.Text>
                                            <Link className="home__newfeatures-link" to="/newfeatures">
                                                <Button variant="primary">Go New Features</Button>
                                            </Link>
                                        </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/about.jpg'} />
                                    <Card.Body>
                                        <Card.Title>About</Card.Title>
                                        <Card.Text>
                                            Information about the developer; and the inspiration behind building these apps.
                                        </Card.Text>
                                        <Link className="home__about-link" to="/about">
                                            <Button variant="primary">Go About</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

        if (this.state.firstRender) {
            this.setState({ firstRender: false })
        return (
                <>
                <Header/>
                <div>{menu}</div>
                </>)
        } else {
            return (
               <>
               <Header />
               <div>{menu}</div>
               </>)
        }

    }
}