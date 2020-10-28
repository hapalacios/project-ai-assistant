import React from 'react';
import NewsCarouselCard from '../NewsCarouselCard/NewsCarouselCard';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './NewsCarousel.scss'

const NewsCarousel = ({ articles, activeArticle }) => {
     let intervalTime = 15000;  
     let article1 = articles[0];
     let article2 = articles[1];
     let article3 = articles[2];
     let article4 = articles[3];
     let article5 = articles[4];
     let article6 = articles[5];
     let article7 = articles[6];
     let article8 = articles[7];
     let article9 = articles[8];
     let article10 = articles[9];
     let article11 = articles[10];
     let article12 = articles[11];
     let article13 = articles[12];
     let article14 = articles[13];
     let article15 = articles[14];  

     return (

       <div className="news-carousel">
            <Carousel touch={false} keyboard={true}>
                    <Carousel.Item interval={intervalTime} className="news-carousel__item">
                         <CardGroup>
                              {article1 ? <Card i={0} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                             <NewsCarouselCard activeArticle={activeArticle} i={0} article={article1} />
                                        </Card>
                              : null}

                              {article2 ? <Card i={1} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={1} article={article2} />
                              </Card>
                                   : null}

                              {article3 ? <Card i={2} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={2} article={article3} />
                              </Card>
                                   : null}  
                         </CardGroup>
                    </Carousel.Item>
                 
                 {article4 ?   
                    <Carousel.Item interval={intervalTime} className="news-carousel__item">
                         <CardGroup>
                              {article4 ? <Card i={3} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={3} article={article4} />
                              </Card>
                                   : null}

                              {article5 ? <Card i={4} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={4} article={article5} />
                              </Card>
                                   : null}

                              {article6 ? <Card i={5} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={5} article={article6} />
                              </Card>
                                   : null}
                         </CardGroup>
                    </Carousel.Item>
                   : null } 

                  {article7 ?
                    <Carousel.Item interval={intervalTime} className="news-carousel__item">
                         <CardGroup>
                              {article7 ? <Card i={6} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={6} article={article7} />
                              </Card>
                                   : null}

                              {article8 ? <Card i={7} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={7} article={article8} />
                              </Card>
                                   : null}

                              {article9 ? <Card i={8} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={8} article={article9} />
                              </Card>
                                   : null}
                         </CardGroup>
                    </Carousel.Item>
                   : null }

                  {article10 ? 
                    <Carousel.Item interval={intervalTime} className="news-carousel__item">
                         <CardGroup>
                              {article10 ? <Card i={9} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={9} article={article10} />
                              </Card>
                                   : null}

                              {article11 ? <Card i={10} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={10} article={article11} />
                              </Card>
                                   : null}

                              {article12 ? <Card i={11} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={11} article={article12} />
                              </Card>
                                   : null}
                         </CardGroup>
                    </Carousel.Item>
                  : null }

                  {article13 ?  
                    <Carousel.Item interval={intervalTime} className="news-carousel__item">
                         <CardGroup>
                              {article13 ? <Card i={12} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={12} article={article13} />
                              </Card>
                                   : null}

                              {article14 ? <Card i={13} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={13} article={article14} />
                              </Card>
                                   : null}

                              {article15 ? <Card i={14} className="news-carousel__card" bg={'light'} text={'dark'} style={{ width: '19rem' }}>
                                   <NewsCarouselCard activeArticle={activeArticle} i={14} article={article15} />
                              </Card>
                                   : null}
                         </CardGroup>
                    </Carousel.Item>
                   : null } 
            </Carousel>
       </div> 

  );
};
export default NewsCarousel;