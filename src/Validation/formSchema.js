import *as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'must be at least 2 characters in length')
    .required('Please place a name for the order.'),

    phone: yup
    .string()
    .min(9, ' must be at least 9 characters in length.')
    .required('leave a callback number'),
})

export default formSchema