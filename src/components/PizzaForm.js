import React from 'react'

const PizzaForm = (props) =>{
const{
    values,
    submit,
    inputChange,
    checkboxChange,
  
}= props

const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}
const onCheckboxChange =  evt =>{
    const {name, checked} = evt.target
    checkboxChange(name, checked)
}
const onInputChange = evt =>{
    const {name, value} = evt.target
    inputChange(name, value)
}
return(
    <form className= 'form container' onSubmit={onSubmit}>
    <div className='form inputs'>
    <h3>Order</h3>
    <label>name:&nbsp;
        <input
        value={values.names}
        onChange={onInputChange}
        name='name'
        type='text'
        />
    </label>
    <label>phone number:&nbsp;
        <input
        value={values.phone}
        onChange={onInputChange}
        name='phone'
        type='phone'
        />
    </label>
    <label>Pie Size:
    <select onChange={onInputChange} value={values.sizes}>
        <option selected value='select'>
            Pick A Size
        </option>
        <option value='persoonal'>Personal Pan</option>
        <option value='small'>Small</option>
        <option value='med'>Medium</option>
        <option value='large'>Large</option>
        <option value='xl'>Extra Large</option>
    </select>
    </label>
        <h3>Pick a Sauce</h3>
        <label>Og Red
            <input
            type="radio"
            name="sauce"
            value="red"
            checked={values.sauce === "red"}
            onChange={onInputChange}
            />
        </label>
        <label>Garlic
            <input
            type="radio"
            name="sauce"
            value="garlic"
            checked={values.sauce === "garlic"}
            onChange={onInputChange}
            /> 
        </label>
        <label>BBQ Sauce
            <input
            type="radio"
            name="sauce"
            value="bbq"
            checked={values.sauce === "bbq"}
            onChange={onInputChange}
            />
        </label>
        <label >White Sauce
            <input
            type="radio"
            name="sauce"
            value="white"
            checked={values.sauce === "white"}
            onChange={onInputChange}
            />
        </label>
        <h3>Choose a Topping</h3>
        <label>Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.toppings.olives}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Bacon
          <input
            type="checkbox"
            name="bacon"
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Parmeasan
          <input
            type="checkbox"
            name="parm"
            checked={values.toppings.parmeasan}
            onChange={onCheckboxChange}
          />
        </label>
   < label> Extras:
   <select
        onChange={onInputChange}
        value={values.extras}
        name='extras'
        >
            <option value=''>Pick some extras</option>
            <option value='ec'>Extra Cheese</option>
            <option value='es'>Extra Sauce</option>
            <option value='et'>Extra toppings</option>
            <option value='none'>None</option>
            </select>
</label>
<label>Special Intructions:
            <input
            type="text"
            name="special"
            value={values.special}
            onChange={onInputChange}
            />
        </label>
    <label>Order type:
        <select
        onChange={onInputChange}
        value={values.type}
        name='order'
        >
            <option value=''>Select an Option</option>
            <option value='delivery'>Delivery</option>
            <option value='pickup'>Pickup</option>
            </select>
    </label>
    <button>Submit</button>
    </div>
</form>
)
}
export default PizzaForm;