import React from "react";
import { Route, Link } from "react-router-dom"
import PizzaApp from "./PizzaApp";
import Pizza from './components/Pizza';
import image from './Assets/Pizza.jpg';



const App = () => {
  return (
    <>
      <nav className="navbar">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/pizza">Pizzas</Link></button>
      </nav>
      <h1>Lambda Eats</h1>
      <img src={image} alt= "pizza"></img>
      <Route path="/pizza" component={PizzaApp}/>
    </>
  );
};
export default App;