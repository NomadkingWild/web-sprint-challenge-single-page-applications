import React from 'react';
import {Link}from 'react-router-dom'

const SavedPizza = props => (
  
  <div className="saved-pizza">
    <h3>Saved Pizza</h3>
    {props.list.map(pizza => (
      <span className="saved-pizza">{pizza.title}</span>
    ))}
    <Link to={`/pizza/`}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedPizza;