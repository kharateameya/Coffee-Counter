import React from 'react'
import Espresso from '../Images/Espresso.jpg'
import Cappuccino  from '../Images/Cappuccino.jpg'
import Latte  from '../Images/Latte.jpg'
import Card from './Card'
import  "./Homepage.css"
import Navbar from './Navbar'
// import Basket from './Basket'
// import list from "./data"

const Homepage = () =>  {

  

  return (
  <div >
      <h1>Coffee Counter</h1>
      <div>
        <Navbar/>
      </div>
    <div className='inline'>
     <Card img = {Espresso} description = "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees." title = "Espresso Coffee"/>
     
     
     <Card img = {Cappuccino} title = "Cappuccino Coffee" description = "A cappuccino is an espresso-based coffee drink that originated in Italy and is prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder."/>
     
    <Card img = {Latte} title = "Latte Coffee" description = "Caffè latte, often shortened to just latte in English, is a coffee beverage of Italian origin made with espresso and steamed milk."/>
    </div>
  </div>
  )
}

export default Homepage