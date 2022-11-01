import React from 'react'
import Navbar from './Navbar'
import EspressoMilk from '../Images/EspressoMilk.jpg'
import CappuccinoMilk  from '../Images/CappuccinoMilk.jpg'
import LatteMilk  from '../Images/LatteMilk.jpg'
import Card from './Card'
const Milk = () => {
  return (
    <div>
        <h1>Milk</h1>
        <Navbar/>
        <Card img = {EspressoMilk} description = "The two work so well together because milk balances the natural bitterness of espresso and introduces sweetness, and although many of us enjoy the intense hit of a double espresso or a punchy americano, coffees that combine espresso and milk are by far the most popular choice for most coffee lovers." title = "Espresso Coffee Milk 🥛"/>
        <Card img = {CappuccinoMilk} description = "Outside of Italy, cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk. Cappuccinos are most often prepared with an espresso machine." title = "Cappuccino Coffee Milk 🥛"/>
        <Card img = {LatteMilk} description = "A latte is an espresso and steamed milk, generally in a 1:3 to 1:5 ratio of espresso to milk, with a little foam on top. In Italy it is called caffè latte or caffelatte, which means coffee and milk." title = "Latte Coffee Milk 🥛"/>
     
    </div>
  )
}

export default Milk