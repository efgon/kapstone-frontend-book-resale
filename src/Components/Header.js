import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import greyBackground from '../img/darkGreyBackground.jpeg'

function Header() {
    return (
        <div>
            <Carousel style={{ height: '60px' }}>
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px' }}
                        className="d-block w-100"
                        src={greyBackground}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Advertisement 1</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px' }}
                        className="d-block w-100"
                        src={greyBackground}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Advertisement 2</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px' }}
                        className="d-block w-100"
                        src={greyBackground}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Advertisement 3</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header
