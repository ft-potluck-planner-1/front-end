import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Must provide a Name')
        .min(2,'name must be at least 2 characters'),
    password: yup
        .string()
        .trim()
        .required('You must create a password')
        .min(3, 'Password must be (at least) 3 characters long'),
    terms: yup.boolean(),
    
})

export default signUpSchema