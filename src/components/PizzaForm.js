import React from 'react'

const PizzaForm = (props) =>{
const{
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
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
    <div className='form submit'>
        <h2>Order a Pizza</h2>
        <button className='submitBtn' disabled={disabled}>submit</button>
        <div className='errors'>
            <div>{errors.crust}</div>
            <div>{errors.sauce}</div>
            <div>{errors.toppings}</div>
            <div>{errors.extras}</div>
            <div>{errors.orders}</div>
        </div>
    </div>

    <div className='form inputs'>
    <h3>Order</h3>
    <label>crust&nbsp;
        <input
        value={values.crust}
        onChange={onInputChange}
        name='crust'
        type='text'
        />
    </label>
    <label>sauce&nbsp;
        <input
        value={values.sauce}
        onChange={onInputChange}
        name='sauce'
        type='text'
        />
    </label>
    <label>toppings&nbsp;
        <input
        value={values.toppings}
        onChange={onInputChange}
        name='toppings'
        type='text'
        />
    </label>
   < label>Extras
   <select
        onChange={onInputChange}
        value={values.extras}
        name='extras'
        >
            <option value=''> Options</option>
            <option value='initial'>Extra Cheese</option>
            <option value='rough'>Extra Sauce</option>
            <option value='pr'>Extra toppings</option>
            <option value='paid'>Project Paid for and Completed</option>
            </select>
</label>
    <label>Order type
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
    /</div>
</form>
)
}
export default PizzaForm;