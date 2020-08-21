import React, {useState, useEffect} from "react";
import {useHistory, Route, Switch, BrowserrRouter as Router} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm';
import SavedPizza from './components/SavedPizza';
import PizzaList from './components/PizzaList';

const initialFormValues={
  crust:'',
  sauce:'',
  toppings:'',
  extras:'',
  order:'',
}
const initialFormErrors ={
  crust:'',
  sauce:'',
  toppings:'',
  extras:'',
  order:'',
}
const initialPizzas =[]
const initialDisabled = true
const App = () => {
  const [formValues, setFormValues]= useState(initialFormValues)
  const [formErrors, setFormErrors]= useState(initialFormErrors)
  const [saved,  setSaved]= useState([]);
  const[disabled, setDisabled]=useState(initialDisabled)
  const[pizza, setPizza]=useState(initialPizzas);
  const history = useHistory()
  const routeToHome = () =>{
    history.push('/');
  }

  
  useEffect(()=>{
    const getPizza = () => {
      axios.get('(http://localhost:3000/api/pizza)')
      .then(res=>{
        setPizza(res.data);
      })
      .catch(err =>{
        console.log(err)
      });
    }
    getPizza();
  },[]);

  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path= '/pizzas/:id'><Pizza pizzas={pizza}/></Route>
        <Route path='/'><Pizza pizzas={pizza}/></Route>
      </Switch>
    </>
  );
};
export default App;
