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
import { useStore, REMOVEBOOK } from "../Store/store";

function Cart() {
  const dispatch = useStore((state) => state.dispatch);
  const cart = useStore((state) => state.cart);
  let cartTotal = 0;

  console.log(cart);
  return (
    <>
      <h1>Your Cart</h1>
      {cart.slice(1, cart.length).map((book) => {
        return (
          <div className="shoppingCart">
            <div
              className="cartBooks"
              style={{ marginTop: "80px", width: "700px", height: "auto" }}
            >
              <Image
                src={book.imageURL}
                thumbnail
                style={{ height: "22rem", width: "250px" }}
              />

              <Card
                style={{
                  width: "20rem",
                  height: "22rem",
                  marginBottom: "20px",
                }}
              >
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {book.Author}
                  </Card.Subtitle>
                  <hr />
                  <ListGroup className="list-group-flush">
                    {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                    <ListGroupItem>Price: ${book.PurchasePrice}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button
                    variant="outline-dark"
                    style={{ marginTop: "4px" }}
                    onClick={() => {
                      cart.splice(cart.indexOf(book), 1);
                      dispatch({ type: REMOVEBOOK, payload: cart });
                      window.location.reload();
                    }}
                  >
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
      <div className="checkout">
        {cart.slice(1, cart.length).forEach((bookInCart) => {
          cartTotal += bookInCart.PurchasePrice;
        })}
        <Card style={{ width: "250px" }}>
          <Card.Header>Checkout</Card.Header>
          <Card.Body>
            <Card.Title>Cart Total: ${cartTotal.toFixed(2)}</Card.Title>
            <Card.Text>Shipping Rates may vary by location</Card.Text>
            <Button variant="outline-dark">Checkout</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cart;
