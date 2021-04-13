import React from 'react'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function AllBooksPage() {
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
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Buy for ${book.PurchasePrice}</Button>
                                <Button variant="outline-dark">Rent for ${book.RentPrice}</Button>
                            </Card.Footer>
                        </Card>
                    )
                })
                }
            </div>
        </>
    )
}

export default AllBooksPage
