import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';
const Pizza = (props) => {
    const [pizza, setPizza] = useState();
    const {id}= useParams();
    const {url}= useRouteMatch();
    console.log(id);
    console.log (url);

    let idy = url.substring(url.lastIndexOf('/')+1);
    useEffect(()=>{
        const id = idy;

        axios.get(`http://localhost:3000/api/pizza/${id}`)
        .then(res=>{
            setPizza(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[idy])
    if(!pizza){
        return <div>Loading your Pizza...</div>;
    }
    const {title,toppings, sauce, crust, cheese}= pizza;
    return(
        <div className='saved'>
            <div className='pizza-card'>
                <h2>{title}</h2>
                <div className='pizza-style'>
                    Style:<em>,{sauce},{crust}</em>
                </div>
                <div className='pizza-toppings'>
                    Cheese<strong>{cheese}</strong>
                </div>
                <h3>Toppings</h3>
                {toppings.map(topping => (
          <div key={topping} className="topping-item">
            {topping}
          </div>
        ))}

            </div>
        <div className='submit-button'>Submit</div>
        </div>
    )
}

export default Pizza;