import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useHistory } from 'react-router-dom';
import wordsToNumbers from 'words-to-numbers';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Components/Header';
import Messenger from '../../Components/Messenger/Messenger.jsx';
import axios from 'axios';
import './ConversationApp.scss';

const ConversationApp = () => {   
   const [firstRender, setFirstRender] = useState(true);

   const [conversations, setConversations] = useState([]);


   const [activeArticle, setActiveArticle] = useState(0);
   const [newsArticles, setNewsArticles] = useState([]);
   const [key, setKey] = useState("text-editor");
   const [textEditorData, setTextEditorData] = useState("Write some text here...");
   const [isOpen, setIsOpen] = useState(false);
   const [myUserID] = useState("new_user")
   const [newMessages, setNewMessages] = useState([]);
   const [newTempMessages1, setNewTempMessages1] = useState([]);
   const [newTempMessages2, setNewTempMessages2] = useState([]);
   const [copyFlag, setCopyFlag] = useState(false);

   let history = useHistory();
   let consec = 2;

   const getNewMessages = () => {
      //setNewMessages([...newMessages, ...testMessages])
      setNewMessages([...newMessages, ...welcomeMessages])
   }

   // useEffect(() => {
   //    const source = axios.CancelToken.source();

   //    axios.get('https://randomuser.me/api/?results=20', { cancelToken: source.token }).then(response => {
   //       let newConversations = response.data.results.map(result => {
   //          return {
   //             photo: result.picture.large,
   //             name: `${result.name.first} ${result.name.last}`,
   //             text: 'Hello there! This is a message used for test purposes for this application.'
   //          };
   //       });
   //       setConversations([...conversations, ...newConversations])
   //       return () => {
   //          source.cancel("Component got unmounted");
   //       };
   //    });

 
   // }, [firstRender])

   // const getConversations = () => {
   //     axios.get('https://randomuser.me/api/?results=20').then(response => {
   //           let newConversations = response.data.results.map(result => {
   //                return {
   //                     photo: result.picture.large,
   //                     name: `${result.name.first} ${result.name.last}`,
   //                     text: 'Hello there! This is a message used for test purposes for this application.'
   //                };
   //           });
   //           setConversations([...conversations, ...newConversations])
   //      });
   // }

   useEffect(() => {
      if (firstRender === false) {
         if (copyFlag === true) {
            let newMessagesX = newMessages;
            if (newTempMessages1) {
               newMessagesX.push(newTempMessages1);
            }
            if (newTempMessages2) {
               newMessagesX.push(newTempMessages2);
            }
            setNewMessages(newMessagesX);
            setCopyFlag(false);
         }
      } else {
         setFirstRender(false);
      }
   }, [copyFlag]);

   useEffect(() => {
      getNewMessages();
      
      alanBtn({
         key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: ( command, articles, number ) => {
       
            if (command.command === 'newConversationLine1') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message1,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message2,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine2') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message3,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message4,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine3') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message5,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message6,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine4') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message7,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message8,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine5') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message9,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message10,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine6') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message11,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message12,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine7') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message13,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message14,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine8') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message15,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message16,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine9') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message17,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message18,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine10') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message19,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message20,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine11') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message21,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message22,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine12') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message23,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message24,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine13') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message25,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message26,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            } else if (command.command === 'newConversationLine14') {
               setNewTempMessages1({
                  id: consec + 1,
                  author: myUserID,
                  message: command.message27,
                  timestamp: new Date().getTime()
               })
               setNewTempMessages2({
                  id: consec + 2,
                  author: 'Alan',
                  message: command.message28,
                  timestamp: new Date().getTime()
               })
               consec = consec + 2;
               setCopyFlag(true);
            }

            if (command.command === 'go:home') {
               alanBtn().deactivate();
               alanBtn().remove();
               history.push("/")
            } else if (command.command === 'go:conversation') {
               alanBtn().deactivate();
               alanBtn().remove();
               history.push("/conversationapp")
            } else if (command.command === 'go:assistant') {
               alanBtn().deactivate();
               alanBtn().remove();
               history.push("/proassistant")
            } else if (command.command === 'go:newfeatures') {
               alanBtn().deactivate();
               alanBtn().remove();
               history.push("/newfeatures")
            } else if (command.command === 'go:about') {
               alanBtn().deactivate();
               alanBtn().remove();
               history.push("/about")
            }

            if (command === 'go:texteditor') {
               setKey("text-editor");

            } else if (command === 'write:texteditor') {
               setKey("text-editor");

            } else if (command === 'read:texteditor') {
               setKey("text-editor");
               alanBtn().playText(textEditorData);

            } else if (command === 'go:scheduler') {
               setKey("scheduler");





            } else if (command === 'newHeadlines') {
               setNewsArticles(articles);
               // console.log(newsArticles)
               setActiveArticle(-  1);
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
   }, []
   );
           
   let body =  <div className="conversation-app">
                  <Carousel touch={false} keyboard={false}  >
                     <Carousel.Item interval={500}>
                        <img
                           className="conversation-app__background"
                           src={process.env.PUBLIC_URL + '/assets/images/conversation-background15.jpg'}
                           alt="Press the blue button to call Alan AI"
                        />
                        <Carousel.Caption>
                           <p className="conversation-app__carousel-caption">Press the blue button to start a conversation</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item interval={800000}>
                        <img
                           className="conversation-app__background"
                           src={process.env.PUBLIC_URL + '/assets/images/conversation-background14.jpg'}
                           alt="Press the blue button again to call Alan AI"
                        />
                        <Carousel.Caption>
                           <Messenger myUserID={myUserID} conversations={conversations} newMessages={newMessages} />
                           <p className="conversation-app__carousel-caption">Press the blue button to call Alan AI</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
                </div>

   return (
      <div className="conversation-app__container">
         <Header />
         <div>{body}</div>
      </div>
   )
}
export default ConversationApp;

var testMessages = [
   {
      id: 1,
      author: `new_user`,
      message: 'This is test a message. It is long enough to test the capabilities of the chatbot application.',
      timestamp: new Date().getTime()
   },
   {
      id: 2,
      author: 'orange',
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
   {
      id: 3,
      author: 'orange',
      message: 'This is test a message. It is long enough to test the capabilities of the chatbot application.',
      timestamp: new Date().getTime()
   },
   {
      id: 4,
      author: `new_user`,
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
   {
      id: 5,
      author: `new_user`,
      message: 'This is test a message. It is long enough to test the capabilities of the chatbot application.',
      timestamp: new Date().getTime()
   },
   {
      id: 6,
      author: `new_user`,
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
   {
      id: 7,
      author: 'orange',
      message: 'This is test a message. It is long enough to test the capabilities of the chatbot application.',
      timestamp: new Date().getTime()
   },
   {
      id: 8,
      author: 'orange',
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
   {
      id: 9,
      author: `new_user`,
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
   {
      id: 10,
      author: `new_user`,
      message: 'The message is perfect and the content is wrapping perfectly in the bubble!',
      timestamp: new Date().getTime()
   },
]

var welcomeMessages = [
   {
      id: 1,
      author: `new_user`,
      message: '...',
      timestamp: new Date().getTime()
   },
   {
      id: 2,
      author: 'orange',
      message: 'Press the blue button and call me. E.g. Hello, good morning ',
      timestamp: new Date().getTime()
   }
]
