// Dom working on the Sign Up component 

import React, { useState, useEffect } from 'react';
import signUpSchema from './SignUpSchema';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color:burlywood;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

const StyledTitle = styled.h2`
    color:#1E90FF;
    display:flex;
    align-items:center;
`

const StyledText = styled.h4`
    color: #1E90FF;
    display:flex;
    align-items:center;
    padding-left: 50px;
`

const StyledLabel1 = styled.label`
    margin-bottom: 100px;
    color:#1E90FF;
`

const StyledLabel2 = styled.label`
    color:#1E90FF;
`

const StyledLabel3 = styled.label`
    color:indianred;
`
const StyledInput = styled.input`
    padding:10px;
    margin:10px 0;
    border-radius: 10px;
`
const StyledButton = styled.button`
    background-color: #1E90FF;
    border: none;
    border-radius:10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`

// Initial States
const initialFormValues = {
    // text inputs
    name: '',
    password: '',
    // checkbox
    terms: false,
}

const initialFormErrors = {
    name: '',
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
    axios.post('https://ft-potluck-planner-5.herokuapp.com/api/auth/register', newUser)
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
        <StyledForm id='sign-up form' onSubmit={onSubmit}>

            <StyledTitle>Sign up for our Potluck Planner today!</StyledTitle>
    
            <div className='sign-up inputs'>
                <StyledText>User Information</StyledText>

                    {/* Text Inputs for new User Sign Up form */}

                <StyledLabel1>Name:&nbsp;
                    <StyledInput
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='Enter Your Name'
                    />
                </StyledLabel1>
                <br></br>
                <StyledLabel2>Password:&nbsp;
                    <StyledInput
                        value={formValues.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        placeholder='Create a Password'
                    />
                </StyledLabel2>
            </div>

            <div className='sign-up checkbox'>
                <StyledLabel3>Terms of Service
                    <input
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </StyledLabel3>
            </div>

            <div className='form submit'>

                <StyledButton id='sign-up-button' disabled={disabled}>Sign Up</StyledButton>

                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.password}</div>
                </div>
            </div>
        </StyledForm>
    )
}

export default SignUp