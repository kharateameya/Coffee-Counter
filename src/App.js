
import Homepage from './pages/Homepage';
import './App.css';
// import { BrowserRoute, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Switch, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Milk from './pages/Milk';
import Cream from './pages/Cream';
import Latte from './pages/Latte';
import Order from './pages/Order';


const App = () =>  {
  
  return (
    <div className="App">

    
    <Routes>
      <Route path='/' element = {<Homepage/>}></Route>
      <Route path='/milk' element = {<Milk/>}></Route>
      <Route path='/cream' element = {<Cream/>}></Route>
      <Route path='/latte' element = {<Latte/>}></Route>
      <Route path='/order' element = {<Order/>}></Route>
      </Routes>
    

   
    </div>
  );
}

export default App;
