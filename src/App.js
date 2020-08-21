import React, {useState, useEffect} from "react";
import {useHistory, Route, Switch, BrowserrRouter as Router} from 'react-router-dom';
import axios from 'axios';
import Toppings from './components/Toppings';
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm';
import SavedPizza from './components/SavedPizza';


const App = () => {
  const [saved,  setSaved]= useState([]);
  const[pizza, setPizza]=useState([]);
  const history = useHistory()
  const routeToHome = () =>{
    history.push('/');
  }
  useEffect(()=>{
    const getPizza = () => {
      axios.get('(https://reqres.in/pizza)')
      .then(res=>{
        setPizza(res.data);
      })
      .catch(err =>{
        console.log(err)
      })
    }
  })
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
