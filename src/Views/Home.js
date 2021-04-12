import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../img/book image 1.jpeg'
import ImageTwo from '../img/book image 2.jpeg'
import ImageThree from '../img/book image 3.jpeg'
import bannerImage from '../img/offerOfTheMonth.jpeg'
import { Image, Card, Button } from 'react-bootstrap'
import bookImageOne from '../book img/interviewBook.jpeg'
import bookImageTwo from '../book img/vanGogh.jpeg'
import bookImageThree from '../book img/javascript.jpeg'
import bookImageFour from '../book img/mathBook.jpeg'
import { Link } from 'react-router-dom'

function Home() {


    return (
        <>
            <div>
                <Link to='/Searchresult'>
                    <Image style={{ width: '700px', height: '100px', paddingBottom: '10px', paddingTop: '10px' }} src={bannerImage} fluid />
                </Link>
                <div className='homeCarousel'>
                    <Carousel fade>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={ImageOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={ImageTwo}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={ImageThree}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h1>Now Trending</h1>
                <hr />
                <div className='bookshelf'>
                    <Card style={{ width: '15rem', height: '33rem' }}>
                        <Card.Img variant="top" src={bookImageTwo} style={{ height: '320px' }} />
                        <Card.Body>
                            <Card.Title>Book Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Book title and make up the bulk of
                                the card's content.
    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', height: '33rem' }}>
                        <Card.Img variant="top" src={bookImageOne} style={{ height: '320px' }} />
                        <Card.Body>
                            <Card.Title>Book Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Book title and make up the bulk of
                                the card's content.
    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', height: '33rem' }}>
                        <Card.Img variant="top" src={bookImageThree} style={{ height: '320px' }} />
                        <Card.Body>
                            <Card.Title>Book title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Book title and make up the bulk of
                                the card's content.
    </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', height: '33rem' }}>
                        <Link to='/SingleBookInfo'><Card.Img variant="top" src={bookImageFour} style={{ height: '320px' }} /></Link>
                        <Card.Body>
                            <Card.Title>Book title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the Book title and make up the bulk of
                                the card's content.
    </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Home
