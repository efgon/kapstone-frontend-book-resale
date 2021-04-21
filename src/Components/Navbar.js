import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import cartIMG from "../img/shoppingcart.png";
import { Link } from "react-router-dom";
import Logo from "../img/download.png";
import { useStore, LOGOUT } from "../Store/store";
import { logoutRequest } from "../fetchRequest";
import { useHistory } from "react-router-dom";

function NavBar() {
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const history = useHistory();
  const t = (e) => history.push("/");
  const logout = (e) => {
    logoutRequest(user.accessToken).then(() => dispatch({ type: "LOGOUT" }));
    localStorage.removeItem("user");
    t();
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          {/* <img className='bookLogo' src={Logo} onClick={<Link to='/' />} /> */}
          Second Chapter
        </Navbar.Brand>
        <Form inline></Form>
        <NavDropdown
          title={user.accessToken ? `Hi, ${user.user.firstName}` : "My Account"}
          id="basic-nav-dropdown"
          style={{ marginLeft: "70%" }}
        >
          <NavDropdown.Item href="#action/3.4">
            <div className="signInButton">
              {!user.accessToken ? (
                <Button variant="outline-dark">
                  <Link to="/LogInPage" style={{ color: "black" }}>
                    Sign In
                  </Link>
                </Button>
              ) : (
                <Button variant="outline-dark" onClick={logout}>
                  Log Out
                </Button>
              )}
            </div>
          </NavDropdown.Item>
          {!user.accessToken ? (
            <NavDropdown.Item href="#action/3.1">
              <Link to="/SignUp" style={{ color: "black" }}>
                Create an Account
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}
          <NavDropdown.Divider />
          {user.accessToken ? (
            <NavDropdown.Item href="#action/3.1">
              <Link to="/UserProfile" style={{ color: "black" }}>
                My Page
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}
          {user.accessToken ? (
            <NavDropdown.Item href="#action/3.1">
              <Link to="/MyBooks" style={{ color: "black" }}>
                My Books
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}

          {user.accessToken ? (
            <NavDropdown.Item href="#action/3.4">
              Credit Balance <h5>${user.user.creditBalance}</h5>{" "}
            </NavDropdown.Item>
          ) : (
            ""
          )}
        </NavDropdown>

        {user.accessToken ? (
          <Nav.Link href="/shoppingCart">
            <img
              className="cart"
              src={cartIMG}
              onClick={<Link to="/ShoppingCart" />}
            />
          </Nav.Link>
        ) : (
          ""
        )}
        {user.accessToken ? (
          //hard coded cart items
        <h5>{cart.length}</h5>
        ) : (
          ""
        )}
      </Navbar>

      <Navbar bg="light" variant="light"></Navbar>
      <Navbar
        className="navbar3"
        bg="light"
        variant="light"
        style={{ paddingBottom: "20px" }}
      >
        <Nav className="mr-auto" style={{ margin: "auto" }}>
          <Nav.Link href="/Allbooks">| All |</Nav.Link>
          <Nav.Link href="/AllArtBooks">| Art |</Nav.Link>
          <Nav.Link href="/AllCodingBooks">| Coding |</Nav.Link>
          <Nav.Link href="/AllCookingBooks">| Cooking |</Nav.Link>
          <Nav.Link href="/AllHistoryBooks">| History |</Nav.Link>
          <Nav.Link href="/AllMathBooks">| Math |</Nav.Link>
          <Nav.Link href="/AllPetsBooks">| Pets |</Nav.Link>
          <Nav.Link href="/Searchresult">| Search |</Nav.Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </>
  );
}
export default NavBar;
