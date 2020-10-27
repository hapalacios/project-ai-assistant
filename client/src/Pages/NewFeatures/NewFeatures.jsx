import React  from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Components/Header';
import './NewFeatures.scss'
export default class NewFeatures extends React.Component {
   state = {
      firstRender: true, alanBtnHidden: true, alanBtnInstance: null
   }
   componentDidMount() {
      this.alanBtnInstance = alanBtn({
         key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
         onCommand: (commandData) => {
            if (commandData.command === 'go:conversation') {
               this.props.history.push("/conversationapp")
            } else if (commandData.command === 'go:assistant') {
               this.props.history.push("/proassistant")
            } else if (commandData.command === 'go:newfeatures') {
               this.props.history.push("/newfeatures")
            } else if (commandData.command === 'go:about') {
               this.props.history.push("/about")
            }
         },
      });
   }
   render() {
      return (
         <div className="new-features__container">
            <Header />
            <div className="new-features">
                  <Carousel touch={false} keyboard={true}  >
                     <Carousel.Item interval={500}>
                        <img
                           className="new-features__background"
                           src={process.env.PUBLIC_URL + '/assets/images/conversation-background5.jpg'}
                           alt="Press the arrows to go to the next slide"
                        />
                        <Carousel.Caption>
                           {/* <h3>Say "Hi there"</h3> */}
                           <p className="new-features__carousel-caption">Press the blue button to start the conversation</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item interval={200000}>
                        <img
                           className="new-features__background"
                           src={process.env.PUBLIC_URL + '/assets/images/conversation-background6.jpg'}
                           alt="Press the arrows to go to the previous slide"
                        />
                        <Carousel.Caption>
                           <p className="new-features__carousel-caption">Press the blue button to call Alan AI</p>
                        </Carousel.Caption>
                     </Carousel.Item>
                  </Carousel>
            </div>

         </div>
      )
   }
}