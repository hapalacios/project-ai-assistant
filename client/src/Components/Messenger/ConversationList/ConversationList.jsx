import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
//import axios from 'axios';
import './ConversationList.scss';

const ConversationList = (props) =>  {
     const [conversations, setConversations] = useState([]);
     const [firstRender, setFirstRender] = useState(true);

     // useEffect(() => {
     //      if (firstRender === true) {
     //           getConversations();
     //           setFirstRender(false);
     //      }
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

     return (
          <div className="conversation-list">
               <Toolbar
                    title="Messenger"
                    leftItems={[
                         <ToolbarButton key="cog" icon="ion-ios-cog" />
                    ]}
                    rightItems={[
                         <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
                    ]}
               />
               <ConversationSearch />
               {
                    props.conversations.map(conversation =>
                         <ConversationListItem
                              key={conversation.name}
                              data={conversation}
                         />
                    )
               }
          </div>
     );
}
export default  ConversationList;