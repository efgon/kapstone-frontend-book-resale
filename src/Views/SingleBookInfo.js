import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import bookImage from "../book img/mathBook.jpeg";
import { Card, Button } from "react-bootstrap";
import { BooksArray } from "../Components/BooksArray";
import { useStore, ADDBOOK } from "../Store/store";

function SingleBookInfo(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [myCart, setMyCart] = useState([
    {
      id: 0,
      title: "",
      author: "",
      imageURL: "",
      purchasePrice: 0,
    },
  ]);
  let selectedBookId = props.match.params.id;

  function handleAddBookToCart(e) {
    BooksArray.map((singleBook) => {
      if (singleBook.id == selectedBookId) {
        console.log(singleBook.Title);
        const newBook = {
          id: singleBook.id,
          Title: singleBook.Title,
          Author: singleBook.Author,
          imageURL: singleBook.imageUrl,
          PurchasePrice: singleBook.PurchasePrice,
        };
        setMyCart(newBook);
        dispatch({ type: ADDBOOK, payload: newBook });
        // console.log(myCart);
        console.log(newBook);
      }
    });
  }

  useEffect(() => {
    handleAddBookToCart();
  }, []);

  return (
    <>
      {BooksArray.map((singleBook) => {
        if (singleBook.id == selectedBookId) {
          return (
            <div className="bookInfo" style={{ marginTop: "80px" }}>
              <Image
                src={singleBook.imageUrl}
                thumbnail
                style={{ height: "320px", width: "180px" }}
              />

              <Card
                style={{ width: "45rem", height: "auto", marginBottom: "20px" }}
              >
                <Card.Body>
                  <Card.Title>{singleBook.Title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {singleBook.Author}
                  </Card.Subtitle>
                  <hr />
                  <Card.Text>{singleBook.Description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button variant="outline-dark" onClick={handleAddBookToCart}>
                    Buy for ${singleBook.PurchasePrice}
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
