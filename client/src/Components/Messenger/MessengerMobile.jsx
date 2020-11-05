import React, { useEffect, useLayoutEffect, useState, createRef } from 'react';
import MessageList from './MessageList';
import './MessengerMobile.scss';

const  MessengerMobile =  (props) => {
   //  const [messages, setMessages] = useState([])

   // useEffect(() => {

   //    getMessages();
   //    console.log('props')
   //    console.log(props.newMessages)
      

   // }, [props])

   // const getMessages = () => {
   //    setMessages([...messages, ...props.newMessages])
   // }


   return (
      <div className="messenger-mobile">
         <div className="scrollable-mobile content-mobile">
            <MessageList myUserID={props.myUserID} newMessages={props.newMessages} />
         </div>
      </div>
   );
}
export default MessengerMobile;