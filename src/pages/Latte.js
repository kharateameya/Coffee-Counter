import React from 'react'
import Navbar from './Navbar'
import EspressoLatte from '../Images/EspressoLatte.jpg'
import CappuccinoLatte  from '../Images/CappuccinoLatte.jpg'
import LatteLatte  from '../Images/LatteLatte.jpg'
import Card from './Card'

const Latte = () => {
  return (
    <div>
        <h1>Latte</h1>
        <Navbar/>
        <Card img = {EspressoLatte} description = "Outside Italy, typically a caffè latte is prepared in a 240 mL (8 US fl oz) glass or cup with one standard shot of espresso (either single, 30 mL or 1 US fl oz, or double, 60 mL or 2 US fl oz) and filled with steamed milk, with a layer of foamed milk approximately 12 mm (1⁄2 in) thick on the top." title = "Espresso Coffee Latte ☕"/>
        <Card img = {CappuccinoLatte} description = "Outside of Italy, the ratios of espresso, milk, and foam typically equal 1/3 each. Cappuccino is traditionally small (180 ml maximum) with a thick layer of foam, while 'latte' traditionally is larger (200–300 ml). Caffè latte is often served in a large glass; cappuccino mostly in a 150–180 ml cup with a handle." title = "Cappuccino Coffee Latte ☕"/>
        <Card img = {LatteLatte} description = "In English-speaking countries, latte is shorthand for caffelatte or caffellatte (from caffè e latte, 'coffee and milk'), which is similar to the French café au lait, the Spanish café con leche, the Catalan cafè amb llet, or the Portuguese galao" title = "Latte Coffee Latte ☕"/>
    </div>
  )
}

export default Latte