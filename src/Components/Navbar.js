import React from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";
import cart from "../img/cartImage.jpeg";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Second Chapter</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Placeholder</Nav.Link>

        </Nav>
        <Form inline>
        </Form>

        <NavDropdown title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <div className='signInButton'>
              <Button variant="outline-dark">
                <Link to='/LogInPage' style={{ color: 'black' }}>
                  Sign In
                </Link>
              </Button>
            </div>
          </NavDropdown.Item>

          <NavDropdown.Item href="#action/3.1">
            <Link to='/SignUp' style={{ color: 'black' }}>Create an Account</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1">
            <Link to='/UserProfile' style={{ color: 'black' }}>My Page</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Order History</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Credit Balance $ </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Log Out </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/shoppingCart">
          <img className='cart' src={cart} onClick={<Link to='/ShoppingCart' />} />
        </Nav.Link>
      </Navbar>

      <Navbar bg="light" variant="light" style={{ marginBottom: '20px' }}>
        <Form inline style={{ margin: 'auto' }}>
          <div classname='searchBar'>
            <FormControl type="text" placeholder="Search by Title, Author, or Category" className="mr-sm-2" style={{ width: '500px' }} />
          </div>
          <Button variant="outline-dark">
            <Link to='/Searchresult' style={{ color: 'black' }}>
              Search
            </Link>
          </Button>
        </Form>
      </Navbar>
    </>
  );
}
export default NavBar;
