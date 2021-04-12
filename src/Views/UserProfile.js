import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function UserProfile() {
    return (
        <>
            <h1>Paul's Page</h1>
            <hr />
            <div className='userProfile'>

                <Card border='light' style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Body>
                        <Card.Title>Account Settings</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            First Name:
                            <br />
                            Last Name:
                            <br />
                            Email:
                    </Card.Text>
                        <Button variant="outline-dark">
                            <Link to='/AccountSettings' style={{ color: 'black' }}>Edit Account Settings</Link>
                        </Button>
                    </Card.Body>
                </Card>

                <Card border='light' style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Body>
                        <Card.Title>Order History</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            Review your order history
                    </Card.Text>
                        <Button variant="outline-dark">
                            <Link to='/OrderHistory' style={{ color: 'black' }}>Order History</Link>
                        </Button>
                    </Card.Body>
                </Card>

                <Card border='light' style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Body>
                        <Card.Title>Credit Balance</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Currency</Card.Subtitle>
                        <Card.Text>
                            <h2>$26.98</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card border='light' style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Body>
                        <Card.Title>Address Book</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Current Address</Card.Subtitle>
                        <Card.Text>
                            Street Address:
                            <br />
                            City:
                            <br />
                            State:
                            <br />
                            Zip Code:
                    </Card.Text>
                        <Button variant="outline-dark">
                            <Link to='/AddressPage' style={{ color: 'black' }}>Add/Update Address</Link>
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default UserProfile
