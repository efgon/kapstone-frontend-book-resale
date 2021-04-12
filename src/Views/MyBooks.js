import React from 'react'
import { Image, Card, Button } from 'react-bootstrap'
import bookImageOne from '../book img/interviewBook.jpeg'
import bookImageTwo from '../book img/vanGogh.jpeg'
import bookImageThree from '../book img/javascript.jpeg'
import bookImageFour from '../book img/mathBook.jpeg'
import { Link } from 'react-router-dom'

function MyBooks() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ paddingTop: '20px' }}>My Books</h2>
            <hr />
            <div className='Searchresult'>
                <Card style={{ width: '15rem', height: '35rem' }}>
                    <Card.Img variant="top" src={bookImageTwo} style={{ height: '320px' }} />
                    <Card.Body>
                        <Card.Title>Book Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the Book title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="outline-dark">Sell For $12.00</Button>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '15rem', height: '35rem' }}>
                    <Link to='/SingleBookInfo'><Card.Img variant="top" src={bookImageFour} style={{ height: '320px' }} /></Link>
                    <Card.Body>
                        <Card.Title>Book title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the Book title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="outline-dark">Sell For $7.00</Button>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '15rem', height: '35rem' }}>
                    <Link to='/SingleBookInfo'><Card.Img variant="top" src={bookImageFour} style={{ height: '320px' }} /></Link>
                    <Card.Body>
                        <Card.Title>Book title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the Book title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button variant="outline-dark">Sell For $7.00</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default MyBooks
