import React, {useState, useEffect} from "react";
import {  useHistory,  BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import './App.css'
import Pizza from './components/Pizza';
import PizzaForm from './components/PizzaForm';
// import formSchema from './Validation/formSchema'


const initialFormValues={
  name:'',
  phone:'',
  size:'',
  toppings: {
    pepperoni: false,
    pineapple: false,
    ham: false,
    olives: false,
    sausage: false,
    parmesan: false
  },
    special: '',
    extras:'',
    order:'',
};

const initialFormErrors ={
  name:'',
  phone:'',
  size:'',
  toppings:'',
  extras:'',
  order:'',
}
const initialPizzas =[]
const initialDisabled = true
const App = () => {
  const [formValues, setFormValues]= useState(initialFormValues)
  const [formErrors, setFormErrors]= useState(initialFormErrors)
  const[disabled, setDisabled]=useState(initialDisabled)
  const[pizza, setPizza]=useState(initialPizzas);
  const history = useHistory()
  const routeToHome = () =>{
    history.push('/');
  }

  
  useEffect(()=>{
    const getPizza = () => {
      axios.get('https://reqres.in/api/')
      .then(res=>{
        setPizza(res.data);
      })
      .catch(err =>{
        console.log(err)
      });
    }
    getPizza();
  },[]);
const postNewPizza = newPizza=>{
  axios.post('https://reqres.in/api/pizzas', newPizza)
  .then(res=>{
    setPizza([...pizza, res.data])
  })
  .catch(err=>{
    console.log(err)
  })
  .finally(()=>{
    setFormValues(initialFormValues)
  })
}
const inputChange = (name,value)=>{
  // yup
  // .reach(formSchema, name)
  // .validate(value)
  // .then(valid=>{
  //   setFormErrors({
  //     ...formErrors,
  //     [name]: "",
  //   })
  // })

  // .catch(err=>{
  //   setFormErrors({
  //     ...formErrors,
  //     [name]: err.errors[0],
  //   })
  // })

  setFormValues({
    ...formValues,
    [name]:value,
  })
}
const checkboxChange = (name, isChecked)=>{
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings,
      [name]: isChecked
    }
  });
};

const submit = () =>{
  const newPizza ={
    Name: formValues.name,
    phone: formValues.phone,
    sauce: formValues.sauce,
    toppings: Object.keys(formValues.toppings).filter(
      (hob) => formValues.toppings[hob]
    ),
    special: formValues.special,
    extras: formValues.extras,
    order: formValues.order,
  }
  postNewPizza(newPizza)
}
// useEffect(()=>{
//     getPizza();
// },[])

useEffect(()=>{
 console.log(pizza) 
},[pizza])

// useEffect(()=>{
//   formSchema.isValid(formValues)
//   .then(valid=>{
//     setDisabled(!valid);
//   })
// },[formValues])


  return (
    <div className="App">
      <div className="container">
        <header>
          <h1> Pizza</h1>
        </header>

        <PizzaForm
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
        //   disabled={disabled}
        //   errors={formErrors}
        />

        {pizza.map((pizza) => {
          return <Pizza key={pizza.id} details={pizza} />;
        })}
      </div>
    </div>
  );
}
export default App;
