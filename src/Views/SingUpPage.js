import React, { useState }  from "react";
import { Button, Form, Col } from "react-bootstrap";
import {createUser} from '../fetchRequest'

function SignUpPage() {

  const [userData, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    creditBalance: 50.00,
  });

  const handleSubmit = (e) => {
    console.log(userData.firstName, userData.lastName, userData.email , userData.password)
    e.preventDefault();
    createUser(userData.firstName, userData.lastName, userData.email , userData.password)   
  };

  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setUserdata((state) => ({ ...state, [inputName]: inputValue }));
  };


  return (
    <>
      <h1>Create an Account</h1>
      <hr />
      <Form onSubmit={handleSubmit}
      style={{ margin: 'auto', width: '700px', paddingBottom: '20px' }}>

        <Form.Row>
          <Col>
          <Form.Group as={Col} >
            <Form.Control 
            type="text"
             name="firstname"
             placeholder="First name"
             value={userData.firstName}
             required
             onChange={handleChange}
            />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col} >
            <Form.Control 
              type="email"
              name="lastname"
              placeholder="Last name" 
              value={userData.lastName}
              required
              onChange={handleChange}
            />
            </Form.Group>
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              placeholder="Enter email" 
              value={userData.email}
              required 
              onChange={handleChange}/>
          </Form.Group>


        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password" 
              name="password"
              placeholder="Password"
              value={userData.password}
              required 
              onChange={handleChange}/>
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
