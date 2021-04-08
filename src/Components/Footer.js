import React from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown, InputGroup, Card } from "react-bootstrap";

function Footer() {
    return (
        <div>
            <Card style={{ width: '100%', height: '10rem' }}>
                <Card.Header>Second Chapter</Card.Header>
                <Card.Body>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Card.Subtitle className="mb-2 text-muted">Copyright 2021</Card.Subtitle>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Footer
