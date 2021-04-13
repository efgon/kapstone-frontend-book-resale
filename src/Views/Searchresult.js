import React from 'react'
import { Image, Card, Button } from 'react-bootstrap'
import bookImageOne from '../book img/interviewBook.jpeg'
import bookImageTwo from '../book img/vanGogh.jpeg'
import bookImageThree from '../book img/javascript.jpeg'
import bookImageFour from '../book img/mathBook.jpeg'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'

function Searchresult() {

    return (
        <>
            <h3>All Books</h3>
            <hr />
            <div className='bookshelf'>
                {BooksArray.map((book) => {
                    { console.log(book.Title) }
                    return (
                        <Card style={{ width: '15rem', height: '31.5rem', marginBottom: '20px' }}>
                            {console.log(book.Title)}
                            <Link to={'./SingleBookInfo/' + book.id}><Card.Img key={book.id} variant="top" src={book.imageUrl} style={{ height: '320px' }} /></Link>
                            <Card.Body>
                                <Card.Title>{book.Title}</Card.Title>
                                <Card.Text>
                                    Author: {book.Author}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
                }
            </div>
        </>
    )
}

export default Searchresult
