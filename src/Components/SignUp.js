// Dom working on the Sign Up component 

import React, { useState, useEffect } from 'react';
import signUpSchema from './SignUpSchema';
import * as yup from 'yup';
import axios from 'axios';


// Initial States
const initialFormValues = {
    // text inputs
    name: '',
    email: '',
    password: '',
    // checkbox
    terms: false,
}

const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    terms: false,
}

const initialUsers = []
const initialDisabled = true

const SignUp = () => {
    
    
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues) 
const [formErrors, setFormErrors] = useState(initialFormErrors) 
const [disabled, setDisabled] = useState(initialDisabled)

// Helpers 

const postNewUser = newUser => {
    axios.post(/* API endpoint goes here*/ newUser)
      .then(res => {
        setUsers([res.data, ...users])
        console.log('receiving a successful response back', res.data)
      })
      .catch(err => {
        console.log('unsuccessful response', err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  // Validation

const validate = (name, value) => {
    yup.reach(signUpSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

// Event Handlers

const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // Not an Array
    })
  }

const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser)
  }


    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    useEffect(() => {
        signUpSchema.isValid(formValues).then(valid => setDisabled(!valid))
      }, [formValues])

    return (
        <form id='sign-up form' onSubmit={onSubmit}>

            <h2>Sign up for our Potluck Planner today!</h2>
    
            <div className='sign-up inputs'>
                <h4>User Information</h4>

                    {/* Text Inputs for new User Sign Up form */}

                <label>Name&nbsp;
                    <input
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='Enter Your Name'
                    />
                </label>

                <label>Email
                    <input
                        value={formValues.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        placeholder='Enter Your Email Address'
                    />
                </label>

                <label>Create Password
                    <input
                        value={formValues.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>
            </div>

            <div className='sign-up checkbox'>
                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='form submit'>

                <button id='sign-up-button' disabled={disabled}>Sign Up</button>

                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                </div>
            </div>
        </form>
    )
}

export default SignUp