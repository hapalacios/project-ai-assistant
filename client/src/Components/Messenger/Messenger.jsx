import React from 'react';
import ConversationList from './ConversationList';
import MessageList from './MessageList';
import './Messenger.scss';

export default function Messenger(props) {
     return (
          <div className="messenger">
               <div className="scrollable sidebar">
                    <ConversationList />
               </div>

               <div className="scrollable content">
                    <MessageList myUserID={props.myUserID} newMessages={props.newMessages} />
               </div>
          </div>
     );
}