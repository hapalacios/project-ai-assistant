import React  from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { matchPath, Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import * as yup from 'yup';
import { Formik, Field } from "formik";
import axios from 'axios';
import Header from '../../Components/Header';
import './Home.scss';  
import { FormGroup } from 'react-bootstrap';

const globalUrl = 'http://localhost:8080';
const keyAPI = '' //'?api_key=531deb1a-6b0d-471b-8d77-fe101407ff7e';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
});

function getParams(pathname) {
    const matchProfile = matchPath(pathname, {
        path: `/users/:id`,
    });
    return (matchProfile && matchProfile.params) || {};
};

export default class Home extends React.Component {
    state = {
        firstRender: true, alanBtnHidden: true, alanBtnInstance: null, 
        showModal: true, testMode:false, loginGranted:false, usersArray: [], 
        userSelected:{}, actualUser: 0,  validated: false
    }

    async componentDidMount() {
        // console.log(this.props.match.params.id)
        //const id = this.props.match.params.id;
        await this.getUsers;

        this.alanBtnInstance = alanBtn({
            key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:home') {
                    alanBtn().deactivate();
                    alanBtn().remove();
                    this.props.history.push("/")
                } else if (commandData.command === 'go:conversation') {
                    alanBtn().deactivate();
                    alanBtn().remove();
                    this.props.history.push("/conversationapp")
                } else if (commandData.command === 'go:assistant') {
                    alanBtn().deactivate();
                    alanBtn().remove();
                    this.props.history.push("/proassistant")
                } else if (commandData.command === 'go:newfeatures') {
                    alanBtn().deactivate();
                    alanBtn().remove();
                    this.props.history.push("/newfeatures")
                } else if (commandData.command === 'go:about') {
                    alanBtn().deactivate();
                    alanBtn().remove();
                    this.props.history.push("/about")
                }
            },
        });
    }

    componentWillUnmount() {
        this.alanBtnInstance.deactivate();
        this.alanBtnInstance.remove();
    }

    componentDidUpdate(PrevState) {
        const { pathname } = this.props.location;
        const prevPathname = PrevState.location.pathname;
        // console.log(pathname)
        // console.log(prevPathname)

        // const currentParams = getParams(pathname);
        // const prevParams = getParams(prevPathname);

        // if (currentParams.id !== prevParams.id) {
        //     if (currentParams.id !== undefined) {
        //         this.getUsers;
        //     }
        // }
    }

    handleClose = () => this.setState({ showModal: false });
    handleShow = () => this.setState({ showModal: true });
    handleTestMode = () => {
        this.setState({ testMode: true });
        this.setState({ showModal: false });
    }

    handleChange = event => {
        event.preventDefault();
        if (event.target.value) {
            if (event.target.value.length > 0) {
                let usernameTemp = event.target.value
                this.getUser(usernameTemp);
            }    
        }   
    } 

    handleSubmit = event => {     
        event.preventDefault();
  
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
     
        let usernameTemp = event.currentTarget.validationUsername.value;
        let passwordTemp = event.currentTarget.validationPassword.value;

        this.getUser(usernameTemp);

        if (usernameTemp && passwordTemp) {

            let userTemp = this.state.userSelected

             if (userTemp) {
                if (passwordTemp === userTemp.password) {
                    //Access Granted
                    setTimeout(() => {
                        this.setState({ actualUser: userTemp.userid });
                        this.setState({ validated: true });
                        this.setState({ showModal: false })
                        this.setState({ firstRender: false });
                    }, 80);

                }
            }
            else {
                alert("Check your password and try again");
            }    

        } else {
            alert("Login/Password incorrect!")
        }
        
    }  

    getUsers = () => {
        const url = globalUrl + '/users'
        const config = {
            method: 'get',
            url: `${url}${keyAPI}`,
            headers: {
                'Authorization': 'Basic cm9vdDpyb290cm9vdA=='
            }
        };

        axios(config)
            .then(response => {
                //let maxConsec = Object.keys(res.data).length
                //let dataSort = res.data.sort((a, b) => { return b.consec - a.consec; })
                this.setState({
                    usersArray: response.data
                })
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            })
            .catch(error => {
                console.log(error);
                
                // see why is sending here
                console.log('you are in error')
                //this.props.history.push('/register')
            })
    }
    // getUser = (username) => {
    //     const url = globalUrl + '/users/username/' + username
    //     const config = {
    //         method: 'get',
    //         url: `${url}${keyAPI}`,
    //         headers: {
    //             'Authorization': 'Basic cm9vdDpyb290cm9vdA=='
    //         }
    //     };

    //      axios(config)
    //         .then(response => {
    //             this.setState({
    //                 userSelected: response.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
     
    getUser = (username) => {
        const url = globalUrl + '/users' 
        const config = {
            method: 'get',
            url: `${url}${keyAPI}`,
            headers: {
                'Authorization': 'Basic cm9vdDpyb290cm9vdA=='
            }
        };

        axios(config)
            .then(response => {
                this.setState({
                    userSelected: response.data.data.find(
                        (user) => user.username == username
                    )
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let loginModal = <Modal
                            show={this.state.showModal}
                            onHide={this.handleCloseModal}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header >
                                <Modal.Title>User Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form noValidate validated={this.state.validated}
                                      onSubmit={this.handleSubmit} >
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationUsername">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Username"
                                                    defaultValue=""
                                                    onChange={this.handleChange}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a correct username
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>  
                                        <Form.Group as={Col} md="4" controlId="validationPassword">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Password"
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Write a correct password
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Button variant="secondary" onClick={this.handleTestMode}>
                                        Test Mode
                                    </Button>
                                </Form>
                                    
                                
                            </Modal.Body>
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
            // this.setState({ firstRender: false })
            return (
                <>
                {this.state.showModal === true ? loginModal : null}
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