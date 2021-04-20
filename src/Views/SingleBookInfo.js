import React, { useState } from "react";
import { Image } from "react-bootstrap";
import bookImage from "../book img/mathBook.jpeg";
import { Card, Button } from "react-bootstrap";
import booksArray from "../Components/BooksArray";
import { useStore } from "../Store/store";

function SingleBookInfo(props) {
  const bookInfo = useStore((state) => state.book);
  const [singleBook, setSingleBook] = useState({
    title: "",
    subtitle: "",
    author: "",
    category: "",
    tags: "",
    imageURL: "",
    purchasePrice: 0,
    inventory: 0,
    description: "",
  });

  function handleAddBook(e) {
    e.preventDefault();
  }
  return (
    <div className="bookInfo" style={{ marginTop: "80px" }}>
      <Image
        src={bookImage}
        thumbnail
        style={{ height: "320px", width: "180px" }}
      />

      <Card style={{ width: "45rem", height: "20rem" }}>
        <Card.Body>
          <Card.Title>Math Book</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Author: Tina
          </Card.Subtitle>
          <hr />
          <Card.Text>
            This is a math textbook. It is hard coded but will have more detail
            later. Blah blah blah Blah blah blah Blah blah blah Blah blah blah
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="outline-dark">Buy for $</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SingleBookInfo;
