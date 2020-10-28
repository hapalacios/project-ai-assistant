import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import './NewsCarouselCard.scss'

const NewsCarouselCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
   const [elRefs, setElRefs] = useState([]);
   const scrollToRef = (ref) =>
      window.scroll(0, ref.current.offsetTop - 50);
   // Alan will Scroll above the top of the card

   useEffect(() => {
      window.scroll(0, 0);

      //Array with 15 news   
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
               src={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
               title={title} />
            <div className="news-carousel-card__details">
               <p className="news-carousel-card__date">[{i + 1}]  {(new Date(publishedAt)).toDateString()}</p>
               <p className="news-carousel-card__source">{source.name}</p>
            </div>
            <h4 className="news-carousel-card__title">{title}</h4>
         </CardActionArea>
      </Card>
   );
};

export default NewsCarouselCard;











// return (
//    <Card ref={elRefs[i]} className={activeArticle === i ? classes.activeCard : classes.card}>
//       <CardActionArea href={url} target="_blank">
//          <CardMedia className={classes.media}
//             image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}
//             title={title} />
//          <div className={classes.details}>
//             <Typography variant="body2" color="textSecondary"
//                component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
//             <Typography variant="body2" color="textSecondary"
//                component="h2">{source.name}</Typography>
//          </div>
//          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
//             {title}
//          </Typography>
//          <CardContent>
//             <Typography variant="body2" color="textSecondary" component="p">
//                {description}
//             </Typography>
//          </CardContent>
//       </CardActionArea>
//       <CardActions className={classes.cardActions}>
//          <Button size="small" color="primary" href={url}>Learn More</Button>
//          <Typography variant="h5" color="textSecondary" component="h2">
//             {i + 1}
//          </Typography>
//       </CardActions>
//    </Card>
// );
// };