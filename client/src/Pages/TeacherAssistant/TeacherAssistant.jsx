import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';

// import { NewsCards, Modal } from '../../Components';

import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
// import Messenger from "../../Components/Messenger";
import { CardGroup } from 'react-bootstrap';

const ProAssistant = () => {   
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // const [firstRender, setFirstRender] = UseState(true)
     // const[alanBtnHidden, setAlanBtnHidden]= useState(true);
    const [myUserID] = useState("new_user")
    const [newMessages, setNewMessages] = useState([]);
    let history = useHistory();
    let consec = 0;

    const getNewMessages = () => {
        setNewMessages([...newMessages, ...testMessages])
    }

    useEffect(() => {
        getNewMessages();

        alanBtn({
            key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (command, articles, number) => {
                if (command === 'go:conversation') {
                    history.push("/conversationapp")
                } else if (command === 'go:assistant') {
                    history.push("/proassistant")
                } else if (command === 'go:newfeatures') {
                    history.push("/newfeatures")
                } else if (command === 'go:about') {
                    history.push("/about")
                } else if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'instructions') {
                    setIsOpen(true);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }

            },
        });
    }, []);
    //End of useEffect AlbBtn

    //Declare the visual sections: subheader, body and footer
    let subheader = <div className="subheader">
                       <Container fluid >
                        <Row md={1} lg={1} style={{ height: '0.3rem' }} >
                        </Row>

         {/* ROW 1 */}  

                        <Row md={2} lg={3} >
            {/* STOCK MARKET CARD*/}
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Date and Time</Card.Title>
                                        {/* <Card.Text>
                                            Here is the information about the stock market today.
                                        </Card.Text> */}
                                       <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/stock-market.jpg'} />
                                    </Card.Body>
                                </Card>
                            </Col>

            {/* NEWS CARD*/}        

                            <Col xs={6} md={3} lg={6} >
                              <CardGroup>  
                                <Card bg={'light'} text={'dark'} style={{ width: '2rem' }}>
                                    <Card.Body>
                                        <Card.Title>Homework 1</Card.Title>
                                        <Card.Text>
                                            Here is the information about the homework.
                                        </Card.Text>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/news1.jpg'} />
                                    </Card.Body>
                                </Card>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Homework 2</Card.Title>
                                        <Card.Text>
                                            Here is the information about the homework.
                                        </Card.Text>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/news2.jpg'} />
                                    </Card.Body>
                                </Card>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Homework 3 </Card.Title>
                                        <Card.Text>
                                           Here is the information about the homework.
                                        </Card.Text> 
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/news3.jpg'} />
                                    </Card.Body>
                                </Card>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Homework 4 </Card.Title>
                                        <Card.Text>
                                            Here is the information about the homework.
                                                </Card.Text>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/news1.jpg'} />
                                    </Card.Body>
                                </Card>
                              </CardGroup>  
                            </Col>

                 {/* WEATHER CARD*/}
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Weather Today</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/weather-forecast.jpg'} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

            {/* ROW 2 */}               

                        <Row md={2} lg={3} >
                            {/* EMAIL and CALENDAR CARD*/}
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Email</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/email1.jpg'} />
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Calendar</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/calendar2.png'} />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} md={1} lg={6}>
                                <Card bg={'light'} text={'dark'} style={{ width: '57rem' }}>
                                    <Card.Body>
                                        <Card.Title>Homework Center</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/google1.png'} />
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={2} md={2} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <Card.Title>Tasks</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/tasks1.png'} />
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Hints</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/hints2.jpg'} />
                                    </Card.Body>
                                </Card>
                            </Col>

                            
                         </Row>   

                       </Container>
                    </div> 
    let body = <div className="body">
               </div>
    
    let footer = <div className="footer">
                 </div>


    return (
        <div>
            <Header />
            <div>{subheader}</div>
            <div>{body}</div>
            <div>{footer}</div>
        </div>
    )
}
export default ProAssistant;

{/* <Messenger myUserID={'new_user'} newMessages={testMessages} /> */}

var testMessages = [
    {
        id: 1,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 2,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 3,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 4,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 5,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 6,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 7,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 8,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 9,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 10,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
]