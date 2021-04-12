import React from "react";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  return (
    <>
      <h1>Please Sign in to your Account</h1>
      <hr />
      <Form style={{ margin: 'auto', width: '700px', paddingBottom: '20px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
