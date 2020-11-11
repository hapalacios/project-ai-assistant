import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HintsCarousel.scss'

const HintsCarousel = () => {
     let intervalTime=15000;
     return (
            <div className="hints-carousel">
               <Carousel touch={false} keyboard={true} className="hints-carousel__carousel">

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try asking/saying</h5>
                         <p className="hints-carousel__text">Hello, good morning!</p>
                         <p className="hints-carousel__text">Hi there!</p>
                         <p className="hints-carousel__text">What is your name?</p>
                         <h4 className="hints-carousel__title">
                              Conversation Questions
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try asking/saying</h5>
                         <p className="hints-carousel__text">What is your hobby?</p>
                         <p className="hints-carousel__text">Hey Siri!</p>
                         <p className="hints-carousel__text">Give me an advice</p>
                         <h4 className="hints-carousel__title">
                              Conversation Questions
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                      className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try saying</h5>
                         <p className="hints-carousel__text1">Give me the latest news</p>
                         <h4 className="hints-carousel__title">
                              Latest News
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                      className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try saying</h5>
                         <p className="hints-carousel__text">Give me the latest Business news</p>
                         <h5 className="hints-carousel__category">Categories</h5>
                         <p className="hints-carousel__text">Business, Entertaiment, General, Health, Science, Sports, Technology</p> 
                         <h4 className="hints-carousel__title">
                              News by Categories
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                       className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try saying</h5>
                         <p className="hints-carousel__text">Give me the news from CNN</p>
                         <h5 className="hints-carousel__category">Sources</h5>
                         <p className="hints-carousel__text">CNN, New York Times, BBC News, ABC News, Google News Canada...</p>
                         <h4 className="hints-carousel__title">
                              News by Sources
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Try asking</h5>
                         <p className="hints-carousel__text">What is the Weather in Toronto</p>
                         <h5 className="hints-carousel__category">Weather</h5>
                         <p className="hints-carousel__text">E.g. Weather in New York City, Winnipeg, Vancouver, Montreal, Ottawa, Los Angeles, Miami</p>
                         <h4 className="hints-carousel__title">
                              Weather by Country
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Command OPEN</h5>
                         <p className="hints-carousel__text">Try: OPEN scheduler</p>
                         <h5 className="hints-carousel__category">Commands</h5>
                         <p className="hints-carousel__text">E.g. Open: Text editor</p>
                         <p className="hints-carousel__text">E.g. Open: Scheduler</p>
                         <h4 className="hints-carousel__title">
                              Command OPEN
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Command READ/WRITE</h5>
                         <p className="hints-carousel__text">Try: READ scheduler</p>
                         <h5 className="hints-carousel__category">Commands</h5>
                         <p className="hints-carousel__text">E.g. Read text editor</p>
                         <p className="hints-carousel__text">E.g. Write text editor</p>
                         <h4 className="hints-carousel__title">
                              Command READ/WRITE + Text editor
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime}
                         className="hints-carousel__item">
                         <h5 className="hints-carousel__try-saying">Command GO</h5>
                         <p className="hints-carousel__text">Try: GO to the about page</p>
                         <h5 className="hints-carousel__category">Commands</h5>
                         <p className="hints-carousel__text">E.g. Open: Go to home page</p>
                         <p className="hints-carousel__text">E.g. Open: Go to the conversation page</p>
                         <h4 className="hints-carousel__title">
                              Command GO
                         </h4>
                    </Carousel.Item>

               </Carousel>
            </div>

     );
};
export default HintsCarousel;