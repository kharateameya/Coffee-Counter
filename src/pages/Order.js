import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './Order.css'
// import data from './Card'


const Order = () => {
  return (
    <div>
        <h1>Your Order</h1>
        <Link to = "/"><h3 className='back'>⏪ Back to Home</h3></Link>
        
        <Card/>
    </div>
  )
}

export default Order