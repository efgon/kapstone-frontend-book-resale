import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../Store/store'

function ThankYouPage() {
    const cart = useStore((state) => state.cart);
    const [cartArray, setCartArray] = useState(cart)
    console.log(cartArray)
    useEffect(() => {

    })

    return (
        <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h1>Thank you for shopping with us</h1>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default ThankYouPage
