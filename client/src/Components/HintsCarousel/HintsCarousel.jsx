import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HintsCarousel.scss'

const HintsCarousel = () => {
     let intervalTime=15000;
     return (
            <div className="hints-carousel">
               <Carousel touch={false} keyboard={true}>

                    <Carousel.Item interval={intervalTime} 
                      className="hints-carousel__item">
                         <br/>
                         <h5>Try saying</h5>
                         <br/>
                         <p>Give me the latest news from Canada</p>
                         <br/>
                         <br/>
                         <br/>
                         <br/>
                         <h4 className="hints-carousel__title">
                              Latest News
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                      className="hints-carousel__item">
                         <br/>
                         <h5>Try saying</h5>
                         <p>Give me the latest Business news</p>
                         <br/>
                         <h5>Categories</h5>
                         <p>Business, Entertaiment, General, Health, Science, Sports, Technology</p> 
                         <br/>
                         <h4 className="hints-carousel__title">
                              News by Categories
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                      className="hints-carousel__item">
                         <br/>
                         <h5>Try saying</h5>
                         <p>Give me the latest Business news</p>
                         <br/>
                         <h5>Terms</h5>
                         <p>Toronto, Wall Street, Smartphones, Justin Trudeau...</p>
                         <h4 className="hints-carousel__title">
                              News by Terms
                         </h4>
                    </Carousel.Item>

                    <Carousel.Item interval={intervalTime} 
                       className="hints-carousel__item">
                         <br/>
                         <h5>Try saying</h5>
                         <p>Give me the news from CTV News</p>
                         <br/>
                         <h5>Sources</h5>
                         <p>Google News Canada, CTV News, New York Times, BBC News, CNN, CP24 Toronto, ABC News...</p>
                         <h4 className="hints-carousel__title">
                              News by Sources
                         </h4>
                    </Carousel.Item>

               </Carousel>
            </div>

     );
};
export default HintsCarousel;