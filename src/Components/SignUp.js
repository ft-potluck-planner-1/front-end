// Dom working on the Sign Up component 

import React from 'react';

const SignUp = () => {
    const {
        values,
        submit, 
        change,
        disabled,
        errors,
    } = props

    // Not sure if we want to do this but I tried to write the code on my end for the Submit/Sign up button to be disabled until all the text fields have valid inputs and the terms checkbox is checked. 

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const Onchange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, ValueToUse)
    }

    return (
        <form id='sign-up form' onSubmit={onSubmit}>

            <h2>Sign up for our Potluck Planner today!</h2>
    
            <div className='sign-up inputs'>
                <h4>User Information</h4>

                    {/* Text Inputs for new User Sign Up form */}

                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='Enter Your Name'
                    />
                </label>

                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        placeholder='Enter Your Email Address'
                    />
                </label>

                <label>Create Password
                    <input
                        value={values.password}
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
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='form submit'>

                <button id='sign-up-button' disabled={disabled}>Sign Up</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
    )
}

export default SignUp