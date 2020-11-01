import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActionArea } from '@material-ui/core';
import './NewsCarouselCard.scss'

const NewsCarouselCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
   const [elRefs, setElRefs] = useState([]);
   const scrollToRef = (ref) =>
      window.scroll(0, ref.current.offsetTop - 50);
   // Alan will Scroll above the top of the card

   useEffect(() => {
      window.scroll(0, 0);

      //Array with 15 news  by default
      setElRefs((refs) => Array(15).fill().map((_, j) => refs[j] || createRef()));
   }, []);

   // Scroll to ref allows Alan to scroll to desired section of the page
   useEffect(() => {
      if (i === activeArticle && elRefs[activeArticle]) {
         scrollToRef(elRefs[activeArticle]);
      }
   }, [i, activeArticle, elRefs]);

   return (
      <Card ref={elRefs[i]} className={activeArticle === i ? "news-carousel-card__active-card" : "news-carousel-card__card"}>
         <CardActionArea href={url} target="_blank">
            <img className="news-carousel-card__media"
               src={urlToImage || process.env.PUBLIC_URL + '/assets/images/news-placeholder.jpg' }
               title={title} />
            <div className="news-carousel-card__details">
               <p className="news-carousel-card__date">[{i + 1}]  {(new Date(publishedAt)).toDateString().slice(0,10)}</p>
               <p className="news-carousel-card__source">
                  {
                  source.name.length > 21 ?   
                    source.name.slice(0,21) + "..." : source.name  
                  }
                  </p>
            </div>
            <h4 className="news-carousel-card__title">
               {
                title.length > 143 ? title.slice(0,143) + "..." : title
               }</h4>
         </CardActionArea>
      </Card>
   );
};

export default NewsCarouselCard;