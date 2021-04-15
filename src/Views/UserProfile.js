import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useStore } from "../Store/store";
import { patchUser } from '../fetchRequest'



function UserProfile() {

    const userInfo = useStore((state) => state.user);
    const [user, setUser] = useState({firstName: '',lastName: '', creditBalance: 50.00});

    function handleSubmit(e) {
        e.preventDefault();
        const newUserInfo = {
        //   firstName,
        //   lastName,
        };
        patchUser(userInfo.token, newUserInfo).then((data) => {
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
            <h1>{userInfo.firstName}'s Profile</h1>
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
                        <Button onSubmit={handleSubmit} variant="outline-dark">
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
