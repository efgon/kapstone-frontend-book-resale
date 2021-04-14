import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {useStore} from "../Store/store"
import { loginRequest } from "../fetchRequest";

function LoginPage(props) {
  // const dispatch = useStore((state) => state.dispatch)

  const [formData, setFormData]= useState({
    email: "",
    password:"",
  });

  const user =useStore((state)=> state.user)

  const handleLogin = (e) =>{
    e.preventDefault();
    loginRequest(formData.email, formData.password).then((userData)=>{
      window.localStorage.setItem("user",JSON.stringify(userData));
    })
  }

  const handleChange = (e) =>{
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state)=>({...state, [inputName]: inputValue}))
  }

  useEffect(()=>{
    window.addEventListener('message', handleMessage)
    return()=>{
      window.addEventListener('message', handleMessage)
    }
  },[])

  function handleMessage(e){
    console.log(e)
  }
 const {inputValue}= props
  return (
    <>
    
      <h1>Please Sign in to your Account</h1>
      <hr />
      <Form onSubmit={handleLogin} style={{ margin: 'auto', width: '700px', paddingBottom: '20px' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          required 
          onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password"
          required 
          onChange={handleChange}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
