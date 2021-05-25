import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Must provide a Name')
        .min(2,'name must be at least 2 characters'),
    email: yup
        .string()
        .trim()
        .email('Must provide a valid email address')
        .required('Email address is required'),
    password: yup
        .string()
        .trim()
        .required('You must create a password')
        .min(8, 'Password must be (at least) 8 characters long'),
    terms: yup.boolean(),
    
})

export default signUpSchema