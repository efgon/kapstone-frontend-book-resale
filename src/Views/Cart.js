import React, { useState, useEffect } from "react";
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
import { patchUser } from "../fetchRequest";
import { useStore, REMOVEBOOK, CREDITBALANCE } from "../Store/store";
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch = useStore((state) => state.dispatch);
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user)
  let cartTotal = 0;
  // const [usersCreditBalance, setUsersCreditBalance] = useState({ user: user.creditBalance })


  // console.log(user.user.creditBalance)


  // function handleUserPurchase() {
  //   setUsersCreditBalance(user.user.creditBalance - cartTotal.toFixed(2))
  //   patchUser()
  //     .then((purchaseData) => dispatch({ type: CREDITBALANCE, payload: purchaseData }))
  //     .then(localStorage.setItem("user", user))
  //   console.log(usersCreditBalance)
  // }

  // useEffect(() => {
  //   setUsersCreditBalance(user.user.creditBalance - cartTotal.toFixed(2))
  // }, [handleUserPurchase])

  return (
    <>
      <h1>Your Cart</h1>
      <div className='checkoutBox'>
        <div className="checkout">
          {cart.slice(1, cart.length).forEach((bookInCart) => {
            cartTotal += bookInCart.PurchasePrice;
          })}

        </div>
        <Card style={{ width: "250px" }}>
          <Card.Header>Checkout</Card.Header>
          <Card.Body>
            <Card.Title>Cart Total: ${cartTotal.toFixed(2)}</Card.Title>
            <Card.Title>{cartTotal.toFixed(2) < 50 ? '' : <h4 style={{ color: 'red' }}>Not Enough Credits</h4>}</Card.Title>
            {/* <Card.Text>Your Current Balance: ${user.user.creditBalance}</Card.Text> */}
            {/* {user.user.creditBalance > cartTotal.toFixed(2) ? */}
            <Link to='/ThankYouPage'>
              <Button variant="outline-dark"
              // onClick={handleUserPurchase}
              >Checkout</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
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

    </>
  );
}

export default Cart;
