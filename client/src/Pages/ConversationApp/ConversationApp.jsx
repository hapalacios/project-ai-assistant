import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';
// import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useHistory } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Components/Header';
import Messenger from '../../Components/Messenger/Messenger.jsx';
import './ConversationApp.scss';

const ConversationApp = () => {   
   // const [activeArticle, setActiveArticle] = useState(0);
   // const [newsArticles, setNewsArticles] = useState([]);
   // const [isOpen, setIsOpen] = useState(false);
   // const[alanBtnHidden, setAlanBtnHidden]= useState(true);
   const[myUserID] = useState("new_user")
   // const[consec, setConsec] = useState(0);
   const[newMessages, setNewMessages] = useState([]);
   let history = useHistory();
   let consec = 0;

   const getNewMessages = () => {
      setNewMessages([...newMessages, ...testMessages])
   }

   useEffect(() => {
      getNewMessages();
      // getMyUserID();
      
      alanBtn({
         key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: ({ command }) => {

            if (command === 'newConversationLine1') {
               newMessages.push({
                     id: consec + 1,
                     author: myUserID,
                     message: 'Hello, good morning.',
                     timestamp: new Date().getTime()
               },{
                     id: consec + 2,
                     author: 'Alan',
                     message: 'Hi. What can I do for you?',
                     timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setNewMessages(newMessages);
               console.log(newMessages)
            } else if (command === 'newConversationLine2') {
               newMessages.push({
                     id: consec + 1,
                     author: myUserID,
                     message: 'Hi there.',
                     timestamp: new Date().getTime()
               },{
                     id: consec + 2,
                     author: 'Alan',
                     message: 'Hello. Do you need help?',
                     timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setNewMessages(newMessages);
               console.log(newMessages)
            } else if (command === 'newConversationLine3') {
               newMessages.push({
                     id: consec + 1,
                     author: myUserID,
                     message: 'What is your name?',
                     timestamp: new Date().getTime()
               },{
                     id: consec + 2,
                     author: 'Alan',
                     message: 'My name is Alan',
                     timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setNewMessages(newMessages);
               console.log(newMessages)
            } else if (command === 'newConversationLine4') {
               newMessages.push({
                     id: consec + 1,
                     author: myUserID,
                     message: 'Hey Siri.',
                     timestamp: new Date().getTime()
               },{
                     id: consec + 2,
                     author: 'Alan',
                     message: 'I am Alan. You must be thinking of someone else.',
                     timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setNewMessages(newMessages);
               console.log(newMessages)
            } else if (command === 'newConversationLine5') {
               newMessages.push({
                     id: consec + 1,
                     author: myUserID,
                     message: 'How are you',
                     timestamp: new Date().getTime()
               },{
                     id: consec + 2,
                     author: 'Alan',
                     message: 'I am doing well. Thank you.',
                     timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setNewMessages(newMessages);
               console.log(newMessages)

            } else if (command === 'go:home') {
                  history.push("/")
            } else if (command === "go:back") {
               history.push('/');
            } else if(command === 'go:assistant') {
               history.push("/proassistant")
            } else if (command === 'go:newfeatures') {
               history.push("/newfeatures")
            } else if (command === 'go:about') {
               history.push("/about")
            }  
         },
      });
   }, []);
           
   return (
      <div className="conversation-app__container">
         <Header />
         <div className="conversation-app">
               <Carousel touch={false} keyboard={true}  >
                  <Carousel.Item interval={500}>
                     <img
                        className="conversation-app__background"
                        src={process.env.PUBLIC_URL + '/assets/images/conversation-background15.jpg'}
                        alt="Press the blue button to call Alan AI"
                     />
                     <Carousel.Caption>
                        {/* <h3>Say "Hi there"</h3> */}
                        <p className="conversation-app__carousel-caption">Press the blue button to start the conversation</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={800000}>
                     <img
                        className="conversation-app__background"
                        src={process.env.PUBLIC_URL + '/assets/images/conversation-background14.jpg'}
                        alt="Press the blue  button again if you want to call Alan AI"
                     />
                     <Carousel.Caption>
                        <Messenger myUserID={myUserID} newMessages={newMessages && newMessages} />
                        <p className="conversation-app__carousel-caption">Press the blue button to call Alan AI</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               </Carousel>
         </div>
      </div>
   )
}
export default ConversationApp;
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
// var newMessages = []