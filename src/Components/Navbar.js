import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import cart from "../img/cart.png";
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Book Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">User Profile</Nav.Link>

          <Nav.Link href="#pricing">
            Cart Button
            {/* <img src={cart} /> */}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        {/*USER NAME AND CREDIT GOES HERE*/}
        <Button variant="warning">Logout</Button>
      </Navbar>
    </>
  );
}
export default NavBar;
