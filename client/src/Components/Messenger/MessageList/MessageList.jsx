import React, { useEffect, useRef, useState} from 'react';
// import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message/Message';
import moment from 'moment';
import './MessageList.scss';

const useMountEffect = fun => useEffect(fun, []);

const MessageList = (props) => {
     // const [elRefs, setElRefs] = useState([]);
     const myRef = useRef(null)

     const executeScroll = () =>  myRef.current.scrollIntoView({ behavior: "smooth" })
     // run this function from an event handler or an effect to execute scroll 
     useMountEffect(executeScroll); // Scroll on mount

     const renderMessages = () => {
          let i = 0;
          let messageCount = 0;
          if (props.newMessages === undefined) {
               messageCount = 0;
          } else { 
            messageCount = props.newMessages.length;
          }
          let tempMessages = [];

          while (i < messageCount) {
               let previous = props.newMessages[i - 1];
               let current = props.newMessages[i];
               let next = props.newMessages[i + 1];
               let isMine = current.author === 'new_user'
               let currentMoment = moment(current.timestamp);
               let prevBySameAuthor = false;
               let nextBySameAuthor = false;
               let startsSequence = true;
               let endsSequence = true;
               let showTimestamp = true;

               if (previous) {
                    let previousMoment = moment(previous.timestamp);
                    let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                    prevBySameAuthor = previous.author === current.author;

                    if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                         startsSequence = false;
                    }

                    if (previousDuration.as('hours') < 1) {
                         showTimestamp = false;
                    }
               }

               if (next) {
                    let nextMoment = moment(next.timestamp);
                    let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                    nextBySameAuthor = next.author === current.author;

                    if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                         endsSequence = false;
                    }
               }

               tempMessages.push(
                    <Message
                         key={i}
                         isMine={isMine}
                         startsSequence={startsSequence}
                         endsSequence={endsSequence}
                         showTimestamp={showTimestamp}
                         data={current}
                    />
               );

               executeScroll();
               executeScroll();

               // Proceed to the next message.
               i += 1;
          }

          return tempMessages;
     }

     return (
          <div className="message-list">
               <Toolbar
                    title="Conversation Title"
                    rightItems={[
                         <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
                         <ToolbarButton key="video" icon="ion-ios-videocam" />,
                         <ToolbarButton key="phone" icon="ion-ios-call" />
                    ]}
               />

               <div ref={myRef} id="messagesID" 
                    className="message-list-container">
                         {renderMessages()}
               </div>

               {/* TODO: change icons or delete
               <Compose rightItems={[
                    <ToolbarButton key="photo" icon="ion-ios-camera" />,
                    <ToolbarButton key="image" icon="ion-ios-image" />,
                    <ToolbarButton key="audio" icon="ion-ios-mic" />,
                    <ToolbarButton key="money" icon="ion-ios-card" />,
                    <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
                    <ToolbarButton key="emoji" icon="ion-ios-happy" />
               ]} /> */}
          </div>
     );
}
export default MessageList;
