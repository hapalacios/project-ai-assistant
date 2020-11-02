import React  from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './Home.scss';  
import * as yup from 'yup';
import { Formik, Field } from "formik";

const url = 'http://localhost:8080';
const keyAPI = '' //'?api_key=531deb1a-6b0d-471b-8d77-fe101407ff7e';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
});

export default class Home extends React.Component {
    state = {
        firstRender: true, alanBtnHidden: true, alanBtnInstance: null, showModal: true, testMode:false, loginGranted:false, usersArray: []
    }

    handleClose = () => this.setState({showModal: false});
    handleShow = () => this.setState({showModal: true});
    handleTestMode = () => {
        this.setState({ testMode: true });
        this.setState({ showModal: false });
    }
    getUsers = () => {
        // fetch('http://localhost:4000/users')
        //     .then(response => response.json())
        //     .then(response => this.setState({ usersArray: response.data }))
        //     .catch(err => console.log(err))

        const config = {
            method: 'get',
            url: `${url}${keyAPI}`,
            headers: {},
            data: ''
        };
        axios(config)
            .then(res => {
                let maxConsec = Object.keys(res.data).length
                let dataSort = res.data.sort((a, b) => { return b.consec - a.consec; })
                this.setState({
                    videoList: dataSort,
                    videoSelected: dataSort.find(video => video.consec === maxConsec),
                    actualVideo: dataSort.find(video => video.consec === maxConsec).id
                })
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/register')
            })
    }

    componentDidMount() {

        //If the user exits and there is not test mode activated
        this.getUsers()


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

    componentDidUpdate() {
        //If the user exits and there is not test mode activated

    }


    render() {
        let loginModal = <Modal
                            show={this.state.showModal}
                            onHide={this.handleCloseModal}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header Login>
                                <Modal.Title>User Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={console.log}
                                    initialValues={{
                                        username: 'Username',
                                        password: 'Password',
                                    }}
                                >
                                    {({
                                        handleSubmit,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        touched,
                                        isValid,
                                        errors,
                                    }) => (
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Row>
                                                    <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                                        <Form.Label>Username</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Username"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.username}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.username}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>  
                                                    <Form.Group as={Col} md="4" controlId="validationFormikPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Password"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.password}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.password}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>                                                
                                                </Form.Row>
                                            </Form>
                                        )}
                                </Formik>
                            </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary">Login</Button>
                                    <Button variant="secondary" onClick={this.handleTestMode}>
                                        Test Mode
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        
        let menu = <div className="home">
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
                                            Chatbot App created to have a real conversation with Alan AI API.
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
                                        <Card.Title>AI Assistant</Card.Title>
                                        <Card.Text>
                                            App developed to help you with information about news, weather, time,
                                            tasks; and also writing a text file only using your voice.
                                        </Card.Text>
                                        <Link className="home__proassistant-link" to="/proassistant">
                                            <Button variant="primary">Go AI Assistant</Button>
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
                                                Sprint 2 and 3 future features. E.g. User authentication; use MySQL DB
                                                to store user profiles.
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

        if (this.state.firstRender === true) {
            return (
                <>
                {this.state.showModal === true ? loginModal : null}
                <Header/>
                <div>{menu}</div>
                </>)
            this.setState({ firstRender: false })
        } else {
            return (
               <>
               <Header />
               <div>{menu}</div>
               </>)
        }

    }
}