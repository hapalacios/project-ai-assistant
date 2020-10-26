import React from 'react';
import MessageList from './MessageList';
import './MessengerMobile.scss';

export default function MessengerMobile(props) {
   return (
      <div className="messenger-mobile">
         <div className="scrollable-mobile content-mobile">
            <MessageList myUserID={props.myUserID} newMessages={props.newMessages} />
         </div>
      </div>
   );
}