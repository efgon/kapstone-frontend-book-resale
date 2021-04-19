import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useStore, LOGIN } from "../Store/store";
import { loginRequest } from "../fetchRequest";
import { useHistory } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);

  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const reRoute = (e) => history.push("/");
    // console.log(formData.email)
    // console.log(formData.password)
    e.preventDefault();
    loginRequest(formData.email, formData.password).then((userData) => {
      // console.log(userData)
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({ type: LOGIN, payload: userData });
    });
    reRoute();
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.addEventListener("message", handleMessage);
    };
  }, []);

  function handleMessage(e) {
    //console.log(e);
  }

  return (
    <>
      <h1>Please Sign in to your Account</h1>
      <hr />
      <Form
        onSubmit={handleLogin}
        style={{ margin: "auto", width: "700px", paddingBottom: "20px" }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
        <div>{user.message ? user.message : ""}</div>
      </Form>
    </>
  );
}

export default LoginPage;
