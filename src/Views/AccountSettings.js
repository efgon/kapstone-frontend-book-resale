import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

function AccountSettings() {
    return (
        <>
            <h2>Manage Account</h2>
            < hr />
            <div style={{ width: '70rem', margin: 'auto' }}>
                <div className='accountSettings'>

                    <Form style={{ width: '40rem', marginTop: '30px', marginBottom: '30px' }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Update Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Re-Enter Email address</Form.Label>
                            <Form.Control type="email" placeholder="Re-Enter Email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>
                <hr />

                <div className='accountSettings'>
                    <Form style={{ width: '40rem', marginTop: '30px', marginBottom: '30px' }}>
                        <Form.Label>Update First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                        <br />
                        <Form.Label>Update Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />

                        <Button variant="outline-dark" type="submit" style={{ marginTop: '20px' }}>
                            Submit
  </Button>
                    </Form>
                </div>
                <hr />
                <div className='accountSettings'>
                    <Form style={{ width: '40rem', marginTop: '30px', marginBottom: '30px' }}>
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
                </div>
            </div>
        </>
    )
}

export default AccountSettings
