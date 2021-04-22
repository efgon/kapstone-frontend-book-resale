import React from 'react'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useStore } from "../Store/store"


function AllBooksPage() {
    const dispatch = useStore((state) => state.dispatch)
    const user = useStore((state) => state.user)

    return (
        <>
            <h3>History Books</h3>
            <hr />
            <div className='bookshelf'>
                {BooksArray.map((book) => {
                    if (book.Category === 'history') {
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

export default AllBooksPage