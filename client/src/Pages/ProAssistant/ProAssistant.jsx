import React, { useState, useEffect } from 'react';
import HintsCarousel from '../../Components/HintsCarousel';
import NewsCarousel from '../../Components/NewsCarousel';
import WeatherApp from '../../Components/WeatherApp/WeatherApp';
import ReactCalendar from '../../Components/Calendar/Calendar';
import 'react-calendar/dist/Calendar.css'
import TextEditor from '../../Components/TextEditor';

import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Link, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Components/Header';
import Messenger from "../../Components/Messenger";
import { CardGroup } from 'react-bootstrap';

import './ProAssistant.scss';

const ProAssistant = () => {   
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // const [firstRender, setFirstRender] = UseState(true)
     // const[alanBtnHidden, setAlanBtnHidden]= useState(true);
    const [myUserID] = useState("new_user")
    const [newMessages, setNewMessages] = useState([]);
    let history = useHistory();
    let consec = 0;

    const getNewMessages = () => {
        setNewMessages([...newMessages, ...testMessages])
    }

    const getNewsArticles = () => {
        setNewsArticles([...newsArticles, ...testNewsArticles])
    }

    useEffect(() => {
        getNewMessages();
        getNewsArticles();

        alanBtn({
            key: '2261ebd22a2fd31af3071800c940abf72e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (command, articles, number) => {
                if (command.articles) {
                    setNewsArticles(command.articles);
                }
               
                if (command === 'go:home') {
                    history.push("/")
                } else if (command === 'go:conversation') {
                    history.push("/conversationapp")
                } else if (command === 'go:assistant') {
                    history.push("/proassistant")
                } else if (command === 'go:newfeatures') {
                    history.push("/newfeatures")
                } else if (command === 'go:about') {
                    history.push("/about")

                    
                } else if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    // console.log(newsArticles)
                    setActiveArticle(-  1);
                } else if (command === 'instructions') {
                    setIsOpen(true);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }
                }

            },
        });
    }, []);
    //End of useEffect AlbBtn

    //Declare the visual sections: subheader, body and footer
    let subheader = <div className="subheader">
                      <Container fluid >
                      
                        {/* <Row md={1} lg={1} style={{ height: '100%' }} >
                             <WeatherApp />

                            <NewsCarousel articles={newsArticles} activeArticle={activeArticle} />
                        </Row> */}

         {/* ROW 1 */}  

                        <Row md={2} lg={3} >

            {/* CALENDAR CARD*/}
            
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '21.6rem' }}>
                                    <Card.Body>
                                        <ReactCalendar />
                                    </Card.Body>
                                </Card>
                            </Col>

            {/* NEWS CARD*/}        

                            <Col xs={6} md={3} lg={6} >

                                <Card bg={'light'} text={'dark'} style={{ width: '100%', height: '100%' }}>
                                    <Card.Body>
                                       <NewsCarousel articles={newsArticles && newsArticles} activeArticle={activeArticle} />
                                    </Card.Body>
                                </Card>

                            </Col>

                 {/* WEATHER CARD*/}
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'}  style={{ width: '20rem', margin: '0', padding: '0',  height: '100%'}}>
                                <Card.Body 
                                  style={{ width: '20rem', margin: '0', padding: '0', 
                                           marginTop: '0.9rem',  border: '1px solid transparent',
                                           backgroundColor: 'transparent' }}>                                        
                                        <WeatherApp />
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

            {/* ROW 2 */}               

                        <Row md={2} lg={3} >
                            {/* EMAIL and STOCK CARD*/}
                            <Col xs={6} md={1} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '21.6rem', height: '100%' }}>
                                    <Card.Body>
                                        <Card.Title>Email</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/email1.jpg'} />
                                    </Card.Body>
                                    {/* <Card.Body>
                                        <Card.Title>Stock Market</Card.Title>
                                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/assets/images/stock-market.jpg'} />
                                    </Card.Body> */}
                                </Card>
                            </Col>

            {/* BODY  - CENTER  */}

                            <Col xs={6} md={1} lg={6}>
                                <TextEditor/>
                                
                                {/* <Card bg={'light'} text={'dark'} style={{ width: '43rem' }}>
                                    <Card.Body>
                                        <Card.Img id="bodyID" className="body__center" variant="top" 
                                           src={process.env.PUBLIC_URL + '/assets/images/google4.png'} />
                                    </Card.Body>
                                </Card> */}
                            </Col>



                            <Col xs={2} md={2} lg={3}>
                                <Card bg={'light'} text={'dark'} style={{ width: '20rem', height: '100%' }}>
                                    <Card.Body >
                                        <Card.Title>Hints</Card.Title>
                                        <HintsCarousel className="hints-carousel"/>
                                    </Card.Body>
                                </Card>
                            </Col>



                            
                         </Row>   

                       </Container>
                    </div> 
    let body = <div className="body">
               </div>
    
    let footer = <div className="footer">
                 </div>


    return (
        <div>
            <Header />
            <div>{subheader}</div>
            <div>{body}</div>
            <div>{footer}</div>
        </div>
    )
}
export default ProAssistant;

{/* <Messenger myUserID={'new_user'} newMessages={testMessages} /> */}

var testNewsArticles = [
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Amy Coney Barrett confirmed to US Supreme Court - BBC News",
        "description": "Donald Trump scores pre-election win as US Senate confirms Amy Coney Barrett as Supreme Court judge.",
        "url": "https://www.bbc.com/news/election-us-2020-54700307",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B391/production/_114896954_tv063806677.jpg",
        "publishedAt": "2020-10-27T00:24:00Z",
        "content": "The US Senate has confirmed Judge Amy Coney Barrett to the Supreme Court in a victory for President Donald Trump a week before the general election.\r\nMr Trump's fellow Republicans voted 52-48 to appr… [+2477 chars]"
    },
    {
        "source": {
            "id": "cbc-news",
            "name": "CBC News"
        },
        "author": null,
        "title": "Andrew Wilkinson resigning as B.C. Liberal leader after worst party showing in decades - CBC.ca",
        "description": "Andrew Wilkinson has resigned as leader of the B.C. Liberal Party, two days after the party had its worst provincial election in decades.",
        "url": "https://www.cbc.ca/news/canada/british-columbia/andrew-wilkinson-resigns-1.5777282",
        "urlToImage": "https://i.cbc.ca/1.5764555.1603750152!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/elxn-bc-20200926.jpg",
        "publishedAt": "2020-10-26T23:40:00Z",
        "content": "Andrew Wilkinson has resigned as leader of the B.C. Liberal Party, two days after the party had its worst provincial election outcome in decades.  \r\nWilkinson announced his resignation in a very brie… [+4042 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Calgary Herald"
        },
        "author": "Stephanie Babych",
        "title": "New mandatory limits to social gatherings in Calgary; 1,440 new cases over weekend - Calgary Herald",
        "description": "The mandatory limit on social gatherings will be in place for a month before it is reassessed",
        "url": "https://calgaryherald.com/news/local-news/live-at-330-p-m-province-to-provide-update-on-covid-19-response-9",
        "urlToImage": "https://smartcdn.prod.postmedia.digital/calgaryherald/wp-content/uploads/2020/05/0515-covid-main-w.jpg",
        "publishedAt": "2020-10-26T23:03:45Z",
        "content": "We need to be able to ensure that caseloads do not threaten the health systems ability to support all the health needs of Albertans. When we look at Calgary, the spread is reminiscent of where Edmont… [+1428 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Citynews.ca"
        },
        "author": null,
        "title": "Water discovered on moon's sunlit surface - CityNews Toronto",
        "description": "The implications are significant, as NASA discovers water on the sunlite surface of the moon. Plus, Toronto's oldest tree continues to stand tall after more than 300 years. Richard Southern and Ginella Massa discuss.",
        "url": "https://toronto.citynews.ca/video/2020/10/26/water-discovered-on-moons-sunlit-surface/",
        "urlToImage": "https://newsradio.akamaized.net/images/593482582001/202010/1013/593482582001_6204833828001_6204831543001-vs.jpg?pubId=593482582001",
        "publishedAt": "2020-10-26T22:49:33Z",
        "content": "Updating your profile data...\r\nYou have activated your account, please feel free to browse our exclusive contests, videos and content.\r\nYou have activated your account, please feel free to browse our… [+118 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "MagSafe Charger Only Charges at Full 15W Speeds With Apple's 20W Power Adapter - MacRumors",
        "description": "Alongside the iPhone 12 and 12 Pro models, Apple introduced a new MagSafe charger that attaches to the magnetic ring in the back of the devices,...",
        "url": "https://www.macrumors.com/2020/10/26/magsafe-charger-needs-20w-power-adapter/",
        "urlToImage": "https://images.macrumors.com/t/am9vB31_c5ST-lU46SpuZbY1EEc=/2000x/https://images.macrumors.com/article-new/2020/10/zollotechmagsafechargertest.jpg",
        "publishedAt": "2020-10-26T22:38:00Z",
        "content": "Alongside the iPhone 12 and 12 Pro models, Apple introduced a new MagSafe charger that attaches to the magnetic ring in the back of the devices, providing up to 15W of charging power, which is double… [+2644 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entertainment Tonight"
        },
        "author": "Jennifer Drysdale‍",
        "title": "Jamie Foxx Mourns Death of His Younger Sister DeOndra Dixon at 36 - Entertainment Tonight",
        "description": "'My heart is shattered into a million pieces,' Foxx wrote in a touching tribute on Monday.",
        "url": "https://www.etonline.com/jamie-foxx-mourns-death-of-his-younger-sister-deondra-dixon-at-36-155400",
        "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2020-10/gettyimages-623217024_1.jpg?h=1d3b1573&itok=Fa25YKS5",
        "publishedAt": "2020-10-26T22:15:56Z",
        "content": "Rest in peace, DeOndra Dixon. Jamie Foxx's younger sister has died, he revealed on Monday. She was 36. \r\n\"My heart is shattered into a million pieces... my beautiful loving sister Deondra has transit… [+3077 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Ctvnews.ca"
        },
        "author": "Alyse Kotyk, Alyse Kotyk",
        "title": "Record-breaking update: B.C.'s top doctor announces 817 COVID-19 cases from the weekend - CTV News Vancouver",
        "description": "Another 817 cases of COVID-19 have been added to B.C.'s tally, the province's top doctor revealed in an update that shattered previous daily case-count records.",
        "url": "https://bc.ctvnews.ca/record-breaking-update-b-c-s-top-doctor-announces-817-covid-19-cases-from-the-weekend-1.5161093",
        "urlToImage": "https://www.ctvnews.ca/polopoly_fs/1.5130067.1601650991!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
        "publishedAt": "2020-10-26T22:10:00Z",
        "content": "VANCOUVER -- \r\nAnother 817 cases of COVID-19 have been added to the province's tally, B.C.'s top doctor revealed in an update that shattered previous daily case-count records. in the health ministry'… [+2369 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Montreal Gazette"
        },
        "author": "Matthew Lapierre, Local Journalism Initiative Reporter",
        "title": "COVID-19 red zone restrictions extended until Nov. 23, Legault announces - Montreal Gazette",
        "description": "Twenty-eight days was not enough to stop the spread of COVID-19 in Quebec, Premier François Legault said on Monday at a news conference in Montreal.",
        "url": "https://montrealgazette.com/news/quebec/covid-19-red-zone-restrictions-extended-until-nov-23-legault-announces",
        "urlToImage": "https://smartcdn.prod.postmedia.digital/montrealgazette/wp-content/uploads/2020/08/covid-que-20200713.jpg",
        "publishedAt": "2020-10-26T21:21:40Z",
        "content": "Measures in place in Quebecs COVID-19 hot spots are being extended until Nov. 23.\r\nTwenty-eight days was not enough to stop the spread of COVID-19 in Quebec, Premier François Legault said on Monday a… [+707 chars]"
    },
    {
        "source": {
            "id": "cbc-news",
            "name": "CBC News"
        },
        "author": null,
        "title": "Stock markets sell off on renewed uncertainty over COVID-19 and U.S. election - CBC.ca",
        "description": "Stock markets around the world sold off on Monday as surging coronavirus infections prompted a new wave of fear and uncertainty, barely a week before a U.S. election that could reshape global geopolitics.",
        "url": "https://www.cbc.ca/news/business/markets-monday-1.5777456",
        "urlToImage": "https://i.cbc.ca/1.5777529.1603742546!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/germany-stocks-coronavirus.jpg",
        "publishedAt": "2020-10-26T21:08:00Z",
        "content": "Stock markets around the world sold off on Monday as surging coronavirus infections prompted a new wave of fear and uncertainty, barely a week before a U.S. election that could reshape global geopoli… [+3097 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NME"
        },
        "author": null,
        "title": "Kiss’ Gene Simmons recalls being “scared to death” getting a lift with Eddie Van Halen after Metallica gig - NME",
        "description": "Kiss' Gene Simmons has recalled a scary incident in which Van Halen guitarist Eddie Van Halen gave him a lift after a Metallica concert.",
        "url": "https://www.nme.com/news/music/kiss-gene-simmons-recalls-being-scared-to-death-getting-a-lift-with-eddie-van-halen-after-metallica-gig-2799302",
        "urlToImage": "https://www.nme.com/wp-content/uploads/2020/10/2020_genesimmonsvanhalencomp_getty_2000x1270.jpg",
        "publishedAt": "2020-10-26T21:08:00Z",
        "content": "Kiss bassist Gene Simmons has recalled a hair raising incident in which Van Halen guitarist Eddie Van Halen gave him a lift after a Metallica concert.\r\nSimmons opened up about the encounter with the … [+1814 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Toronto Star"
        },
        "author": null,
        "title": "Ontario's COVID-19 cases up almost a third compared with last weekend - Toronto Star",
        "description": "The pandemic has taken a firmer grip on the province with cases surging by almost one-third this weekend and one of Premier Doug Ford’s MPPs taking it...",
        "url": "https://www.thestar.com/politics/provincial/2020/10/26/ontarios-covid-19-cases-up-almost-a-third-compared-with-last-weekend.html",
        "urlToImage": "https://images.thestar.com/AjesoBq548kuA1lTAwDKbIjAbok=/1200x857/smart/filters:cb(1603749226831)/https://www.thestar.com/content/dam/thestar/politics/provincial/2020/10/26/ontarios-covid-19-cases-up-almost-a-third-compared-with-last-weekend/christine_elliott.jpg",
        "publishedAt": "2020-10-26T20:26:15Z",
        "content": "The pandemic has taken a firmer grip on the province with cases surging by almost one-third this weekend and one of Premier Doug Ford’s MPPs taking it on the chin for not wearing a mask.\r\nOntario’s M… [+4634 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sudbury.com"
        },
        "author": "Sudbury.com Staff",
        "title": "New case of COVID-19 in Greater Sudbury brings area's total to 124 - Sudbury.com",
        "description": "Exposure category is close contact with confirmed case, person is self-isolating",
        "url": "https://www.sudbury.com/local-news/new-case-of-covid-19-in-greater-sudbury-brings-areas-total-to-124-2824366",
        "urlToImage": "https://www.vmcdn.ca/f/files/via/rss/glacier/2020/10/covid-test.jpg;w=804;h=564;mode=crop",
        "publishedAt": "2020-10-26T20:07:00Z",
        "content": "Public Health Sudbury &amp; Districts is reporting a new COVID-19 case in a resident in our service area.\r\nCase no. 124 was exposed through close contact with another confirmed case. The person is fr… [+5480 chars]"
    },
    {
        "source": {
            "id": "cbc-news",
            "name": "CBC News"
        },
        "author": null,
        "title": "B.C. election turnout sinks to all-time low - CBC.ca",
        "description": "Preliminary numbers show only 52.4 per cent of people registered to vote did so in the snap fall election.",
        "url": "https://www.cbc.ca/news/canada/british-columbia/b-c-election-turnout-sinks-to-all-time-low-1.5777084",
        "urlToImage": "https://i.cbc.ca/1.5777370.1603742579!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/bc-election.jpg",
        "publishedAt": "2020-10-26T20:06:00Z",
        "content": "Barely half of B.C.'s registered voters cast a ballot in Saturday's provincial election, according to preliminary estimates by Elections BC, making the rate of participation the lowest ever in record… [+1714 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Sacha Baron Cohen Responds To Trump's 'Creep' Comment - ET Canada",
        "description": "After Donald Trump called \"Borat\" star Sacha Baron Cohen a \"creep,\" Carlos Bustamante, Graeme O'Neil and Keshia Chante react to Sacha's response during \"ET C...",
        "url": "https://www.youtube.com/watch?v=PAD5xrVbU5c",
        "urlToImage": "https://i.ytimg.com/vi/PAD5xrVbU5c/hqdefault.jpg",
        "publishedAt": "2020-10-26T19:53:20Z",
        "content": null
    },
    {
        "source": {
            "id": "cbc-news",
            "name": "CBC News"
        },
        "author": null,
        "title": "39% of Canadians have 'serious problem' with how police interact with people of colour: poll - CBC.ca",
        "description": "The Angus Reid survey found nearly two-thirds of participants agree systemic racism is a serious problem, and almost three-quarters say police in Canada interact inappropriately with Black, Indigenous and people of colour at least some of the time.",
        "url": "https://www.cbc.ca/news/canada/british-columbia/poll-police-interaction-bipoc-angus-reid-1.5776623",
        "urlToImage": "https://i.cbc.ca/1.5642706.1603737897!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/bellwoods-blm-march.jpg",
        "publishedAt": "2020-10-26T19:38:00Z",
        "content": "Nearly two in five Canadians believe there is a serious problem with the way police forces interact with Black, Indigenous and people of colour (BIPOC) communities across the country, according to a … [+2958 chars]"
    }
]
    
var testMessages = [
    {
        id: 1,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 2,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 3,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 4,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 5,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 6,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 7,
        author: 'orange',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 8,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
    {
        id: 9,
        author: `new_user`,
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
    },
    {
        id: 10,
        author: `new_user`,
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
    },
]

