import *as yup from 'yup'

const formSchema = yup.object().shape({
    crust: yup
    .string()
    .min(5, 'must be at least 5 characters in length')
    .required('Please pick a crust.'),
    sauce: yup
    .string()
    .min(3, ' must be at least 3 characters in length.')
    .required('please pick a sauce'),
    toppings:yup
    .string()
    .min(3, 'must be at least 2 characters in length.')
    .required('add some toppings'),
    extras: yup
    .string()
    .oneOf(['ec','et','es','none'])
    .required('Must select an option'),
    order: yup
    .string()
    .oneOf(['delivery','pickup'], 'You must have an order type')
    .required('You must select a type'),
})

export default formSchema