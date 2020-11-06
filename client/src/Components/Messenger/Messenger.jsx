import React from 'react';
import ConversationList from './ConversationList';
import MessageList from './MessageList';
import './Messenger.scss';

const  Messenger = (props) =>  {
     return (
          <div className="messenger">
               <div className="scrollable sidebar">
                    <ConversationList conversations={props.conversations}/>
               </div>

               <div className="scrollable content">
                    <MessageList myUserID={props.myUserID} newMessages={props.newMessages} />
               </div>
          </div>
     );
}
export default Messenger;