import React from "react";
import { Button, Form, Col } from "react-bootstrap";

function SignUpPage() {


  return (
    <>
      <h1>Create an Account</h1>
      <hr />
      <Form style={{ margin: 'auto', width: '700px', paddingBottom: '20px' }}>

        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>


        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-Enter Password" />

          </Form.Group>
        </Form.Row>


        <Button variant="outline-dark" type="submit">
          Submit
  </Button>
      </Form>
    </>
  );
}

export default SignUpPage;
