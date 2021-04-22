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
    console.log(user)
    dispatch({ type: "LOGOUT" })
    t()
    // logoutRequest(user.accessToken)
    //   .then(() => dispatch({ type: "LOGOUT" }))
    //   .then(() => t())
    // localStorage.removeItem("user");
    // t();
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand to="/">
          {/* <img className='bookLogo' src={Logo} onClick={<Link to='/' />} /> */}
          Second Chapter
        </Navbar.Brand>
        <Form inline></Form>
        <NavDropdown
          title={user.accessToken ? `Hi, ${user.user.firstName}` : "My Account"}
          id="basic-nav-dropdown"
          style={{ marginLeft: "70%" }}
        >
          <NavDropdown.Item to="#action/3.4">
            <div className="signInButton">
              {!user.accessToken ? (
                <Button variant="outline-dark">
                  <Link to="/LogInPage" style={{ color: "black" }}>
                    Sign In
                  </Link>
                </Button>
              ) : (
                <Button variant="outline-dark" onClick={logout}>
                  <a to='/'>Log Out</a>
                </Button>
              )}
            </div>
          </NavDropdown.Item>
          {!user.accessToken ? (
            <NavDropdown.Item to="#action/3.1">
              <Link to="/SignUp" style={{ color: "black" }}>
                Create an Account
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}
          <NavDropdown.Divider />
          {user.accessToken ? (
            <NavDropdown.Item to="#action/3.1">
              <Link to="/UserProfile" style={{ color: "black" }}>
                My Page
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}

          {user.accessToken ? (
            <NavDropdown.Item to="#action/3.4">
              Credit Balance <h5>${user.user.creditBalance}</h5>{" "}
            </NavDropdown.Item>
          ) : (
            ""
          )}
        </NavDropdown>

        {user.accessToken ? (
          <Link to="/shoppingCart">
            <img
              className="cart"
              src={cartIMG}
            // onClick={<Link to="/ShoppingCart" />}
            />
          </Link>
        ) : (
          ""
        )}
        {user.accessToken ? (
          //hard coded cart items
          <h5>{cart.length - 1}</h5>
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
          <Link to="/Allbooks" style={{ color: 'grey' }}>| All |</Link>
          <Link to="/AllArtBooks" style={{ color: 'grey' }}>| Art |</Link>
          <Link to="/AllCodingBooks" style={{ color: 'grey' }}>| Coding |</Link>
          <Link to="/AllCookingBooks" style={{ color: 'grey' }}>| Cooking |</Link>
          <Link to="/AllHistoryBooks" style={{ color: 'grey' }}>| History |</Link>
          <Link to="/AllMathBooks" style={{ color: 'grey' }}>| Math |</Link>
          <Link to="/AllPetsBooks" style={{ color: 'grey' }}>| Pets |</Link>
          <Link to="/Searchresult" style={{ color: 'grey' }}>| Search |</Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </>
  );
}
export default NavBar;
