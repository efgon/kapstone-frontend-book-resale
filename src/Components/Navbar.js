import React, { useState } from "react";
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from "react-bootstrap";
import cart from "../img/shoppingcart.png";
import { Link } from 'react-router-dom'
import Logo from '../img/download.png'

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  const logInOut = () => { setLoggedIn(!loggedIn) }

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img className='bookLogo' src={Logo} onClick={<Link to='/' />} />
          Second Chapter
        </Navbar.Brand>
        <Form inline>
        </Form>
        <NavDropdown title={loggedIn ? 'Hi, Paul' : 'My Account'} id="basic-nav-dropdown" style={{ marginLeft: '70%' }}>
          <NavDropdown.Item href="#action/3.4">
            <div className='signInButton'>
              {!loggedIn ? <Button variant="outline-dark" onClick={logInOut}>
                <Link to='/LogInPage' style={{ color: 'black' }}>
                  Sign In
                </Link>
              </Button> :
                <Button variant='outline-dark' onClick={logInOut}>Log Out</Button>
              }
            </div>
          </NavDropdown.Item>
          {loggedIn === false ?
            <NavDropdown.Item href="#action/3.1">
              <Link to='/SignUp' style={{ color: 'black' }}>Create an Account</Link>
            </NavDropdown.Item> : ''}
          <NavDropdown.Divider />
          {loggedIn ?
            <NavDropdown.Item href="#action/3.1">
              <Link to='/UserProfile' style={{ color: 'black' }}>My Page</Link>
            </NavDropdown.Item>
            : ''}
          {loggedIn ?
            <NavDropdown.Item href="#action/3.1">
              <Link to='/MyBooks' style={{ color: 'black' }}>My Books</Link>
            </NavDropdown.Item>
            : ''}
          {loggedIn ?
            <NavDropdown.Item>
              <Link to='/OrderHistory' style={{ color: 'black' }}>
                Order History
            </Link>
            </NavDropdown.Item>
            : ''}
          {loggedIn ?
            <NavDropdown.Item href="#action/3.4">Credit Balance <h5>$42.76</h5> </NavDropdown.Item>
            : ''}
        </NavDropdown>

        {loggedIn ? <Nav.Link href="/shoppingCart">
          <img className='cart' src={cart} onClick={<Link to='/ShoppingCart' />} />
        </Nav.Link>
          : ''}
        {loggedIn ?
          <h5>{cartItems}</h5>
          : ''}
      </Navbar>

      <Navbar bg="light" variant="light" >
        <Form inline style={{ margin: 'auto' }}>
          <div className='searchBar'>
            <FormControl type="text" placeholder="Search by Title, Author, or Category" className="mr-sm-2" style={{ width: '500px' }} />
          </div>
          <Button variant="outline-dark">
            <Link to='/Searchresult' style={{ color: 'black' }}>
              Search
            </Link>
          </Button>
        </Form>
      </Navbar>
      <Navbar className='navbar3' bg="light" variant="light" style={{ paddingBottom: '20px' }}>
        <Nav className="mr-auto" style={{ margin: 'auto' }}>
          <Nav.Link href="/Allbooks">| All |</Nav.Link>
          <Nav.Link href="/Searchresults/Coding">| Coding |</Nav.Link>
          <Nav.Link href="/Searchresults/Art">| Art |</Nav.Link>
          <Nav.Link href="/Searchresults/History">| History |</Nav.Link>
          <Nav.Link href="/Searchresults/Math">| Math |</Nav.Link>
          <Nav.Link href="/Searchresults/Pets">| Pets |</Nav.Link>
          <Nav.Link href="/Searchresults/Cooking">| Cooking |</Nav.Link>
        </Nav>
        <Form inline>
        </Form>
      </Navbar>
    </>
  );
}
export default NavBar;
