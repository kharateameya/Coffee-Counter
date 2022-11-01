import React, {  } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = (props) =>  {

    const onClickHandler = () => {
     const payTitle = props.title
     console.log(payTitle);
    }
    
    
  return (
    
    <div className='card'>
         <div className='espresso main'>
        <img className='img' src={props.img} alt='' width={150}/>
        <p className='text'>{props.title}</p>
        <p className='description'>{props.description}</p>
        <Link to = "/order"><button onClick={onClickHandler} className='btn'> <span>Order Now ☕</span></button></Link>
      </div>
      
    </div>
    
  )
}

export default Card