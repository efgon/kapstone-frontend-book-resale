import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useStore } from "../Store/store";
import { patchUser } from "../fetchRequest";

function AccountSettings() {
  const userInfo = useStore((state) => state.user);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // const newUserInfo = {
    //     firstName,
    //     lastName,
    // };
    patchUser(userInfo.token, user.firstName, user.lastName).then((data) => {
      console.log(data);
      setUser(data.user);
    });
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setUser((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <h2>Manage Account</h2>
      <hr />
      <div style={{ width: "70rem", margin: "auto" }}>
        <div className="accountSettings">
          <Form onSubmit={handleSubmit}
            style={{ width: "40rem", marginTop: "30px", marginBottom: "30px" }}
          >
            <Form.Label>Update First Name</Form.Label>
            <Form.Control 
            placeholder="First name" 
            onChange={(e) => setUser(e.target.value)} 
            value={user.firstName} 
            type="text" 
            />
            <br />
            <Form.Label>Update Last Name</Form.Label>
            <Form.Control 
            placeholder="Last Name"
            onChange={(e) => setUser(e.target.value)} 
            value={user.lastName} 
            type="text"  />

            <Button
              variant="outline-dark"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </div>
        {/* <hr /> */}
        {/* <div className="accountSettings">
          <Form
            style={{ width: "40rem", marginTop: "30px", marginBottom: "30px" }}
          >
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Update Password</Form.Label>
              <Form.Control type="password" placeholder="Update Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re-Enter Password</Form.Label>
              <Form.Control type="password" placeholder="Re-Enter Password" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
        </div> */}
      </div>
    </>
  );
}

export default AccountSettings;
