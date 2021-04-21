import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  Image,
  Button,
} from "react-bootstrap";
import bookImage from "../book img/javascript.jpeg";
import { BooksArray } from "../Components/BooksArray";
import { useStore } from "../Store/store";


function Cart() {
    const cart = useStore((state) => state.cart);

    console.log(cart)
  return (
    <>
      <h1>Your Cart</h1>
      <div className="shoppingCart">
        <div
          className="cartBooks"
          style={{ marginTop: "80px", width: "700px", height: "auto" }}
        >
          <Image
            src={bookImage}
            thumbnail
            style={{ height: "22rem", width: "250px" }}
          />

          <Card
            style={{ width: "20rem", height: "22rem", marginBottom: "20px" }}
          >
            <Card.Body>
              <Card.Title>Math Book</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Author: Tina
              </Card.Subtitle>
              <hr />
              <ListGroup className="list-group-flush">
                {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                <ListGroupItem>Price: $12.99</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted">
             
              <Button variant="outline-dark" style={{ marginTop: "4px" }}>
                Remove
              </Button>
            </Card.Footer>
          </Card>
         
        </div>

        <div className="checkout">
          <Card style={{ width: "250px" }}>
            <Card.Header>Checkout</Card.Header>
            <Card.Body>
              <Card.Title>Cart Total: $25.98</Card.Title>
              <Card.Text>Shipping Rates may vary by location</Card.Text>
              <Button variant="outline-dark">Checkout</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cart;
