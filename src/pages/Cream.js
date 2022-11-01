import React from 'react'
import Navbar from './Navbar'
import EspressoCream from '../Images/EspressoCream.jpg'
import CappuccinoCream  from '../Images/CappuccinoCream.jpg'
import LatteCream  from '../Images/LatteCream.jpg'
import Card from './Card'

const Cream = () => {
  return (
    <div>
        <h1>Cream</h1>
        <Navbar/>
        <Card img = {EspressoCream} description = "The two work so well together because milk balances the natural bitterness of espresso and introduces sweetness, and although many of us enjoy the intense hit of a double espresso or a punchy americano, coffees that combine espresso and milk are by far the most popular choice for most coffee lovers." title = "Espresso Coffee Cream 🍦"/>
        <Card img = {CappuccinoCream} description = "The traditional cappuccino consists of a single espresso, on which the barista pours the hot foamed milk, resulting in a 2 cm (3⁄4 in) thick milk foam on top. Variations could be made adding another shot of espresso resulting in a double cappuccino." title = "Cappuccino Coffee Cream 🍦"/>
        <Card img = {LatteCream} description = "Coffee and milk have been part of European cuisine since the seventeenth century. Caffè e latte, Milchkaffee, café au lait, and café con leche are domestic terms of traditional ways of drinking coffee, usually as part of breakfast in the home. Public cafés in Europe and the USA seem to have no mention of the terms until the twentieth century, although Kapuziner is mentioned in Austrian coffee houses in Vienna and Trieste in the second half of 1700s as coffee with cream, spices, and sugar" title = "Latte Coffee Cream 🍦"/>
    </div>
  )
}

export default Cream