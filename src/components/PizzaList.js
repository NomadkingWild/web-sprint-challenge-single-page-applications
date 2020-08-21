import React from 'react';
import {useHistory, Link} from 'react-router-dom';
const PizzaList = props => {
  return (
    <div className="pizza-list">
      {props.pizzas.map(pizza => (
        <Link to = {`/pizzas/${pizza.id}`}>
        <PizzaDetails key={pizza.id} pizza={pizza} />
      </Link>
      ))}
    </div>
  );
}

function PizzaDetails({ pizza }) {
  const history = useHistory();
  const routeToPizza = () =>{
    history.push('./pizza/id');
  
  }
  const { title, cheese, toppings, sauce, crust } = pizza;
  return (
    
    <div className="pizza-card">
      
      <h2>{title}</h2>
      <div className="style">
        Style: <em>{cheese}, {sauce},{crust}</em>
      </div>
      <div className="pizza-toppings">
        Toppings: <strong>{toppings}</strong>
        <button onClick={routeToPizza} className='md-button movie-button'>Pizza!</button>
      </div>
    </div>
  );
}

export default PizzaList;
