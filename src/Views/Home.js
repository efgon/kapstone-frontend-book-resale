import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../img/book image 1.jpeg'
import ImageTwo from '../img/book image 2.jpeg'
import ImageThree from '../img/book image 3.jpeg'
import bannerImage from '../img/offerOfTheMonth.jpeg'
import { Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'
import Card from 'react-bootstrap/Card'

function Home() {

    return (
        <>
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
                {BooksArray.map((book) => {
                    if (book.id <= 7) {
                        return (
                            <Card style={{ width: '15rem', height: '36rem', marginBottom: '20px' }}>
                                {console.log(book.Title)}
                                <Link to={'./SingleBookInfo/' + book.id}><Card.Img key={book.id} variant="top" src={book.imageUrl} style={{ height: '320px' }} /></Link>
                                <Card.Body>
                                    <Card.Title>{book.Title}</Card.Title>
                                    <Card.Text>
                                        Author: {book.Author}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Button variant="outline-dark">Buy for ${book.PurchasePrice}</Button>
                                    <Button variant="outline-dark">Rent for ${book.RentPrice}</Button>
                                </Card.Footer>
                            </Card>
                        )
                    }
                    else return
                })
                }
            </div>
        </>
    )

}

export default Home
