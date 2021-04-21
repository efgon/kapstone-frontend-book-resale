import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import bookImage from "../book img/mathBook.jpeg";
import { Card, Button } from "react-bootstrap";
import { BooksArray } from "../Components/BooksArray";
import { useStore } from "../Store/store";

function SingleBookInfo(props) {
  const bookInfo = useStore((state) => state.book);
  const [singleBook, setSingleBook] = useState();

  function handleAddBook(e) {
    e.preventDefault();
  }
  // useEffect(()=>{
  //   setSingleBook(props.match.params.id)
  // })
  let selectedBookId = props.match.params.id;

  console.log(selectedBookId);
  return (
    <>
      {BooksArray.map((book) => {
        if (book.id == selectedBookId) {
          console.log(book.id);
          return (
            <div className="bookInfo" style={{ marginTop: "80px" }}>
              <Image
                src={book.imageUrl}
                thumbnail
                style={{ height: "320px", width: "180px" }}
              />

              <Card style={{ width: "45rem", height: "auto", marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {book.Author}
                  </Card.Subtitle>
                  <hr />
                  <Card.Text>{book.Description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button variant="outline-dark">
                    Buy for ${book.PurchasePrice}
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        } else return;
      })}
    </>
  );
}

export default SingleBookInfo;
