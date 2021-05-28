import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Page = styled.div`
    background-color: orange;
    color: black;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 90%;
        margin: 10px auto;
    }

    h4 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 90%;
        margin: 10px auto;
    }

    .potluckSubmit {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: orangered;
        padding: 10px;
        border-radius: 5px;
        width:40%;
        margin: auto;
    }


    label {
        padding: 5px;
        display:flex;
        justify-content: space-around;
    }

    button{
        width: 50%;
        margin: auto;
        background-color: burlywood;
    }

    input {
        background-color: burlywood;
    }

    @media (max-width: 500px) {

        .loginForm {
            width: 75%;

}
    } 

    @media (max-width: 800px) {

.loginForm {
    width: 65%;

}

} 
`;


const initFormVal = {
    name: '',
    date: '',
    time: '',
    location: '',
    food: ''
}


const Organize = (props) => {
const { push } = useHistory()
const { disabled } = props;
const [formVal, setFormVal] = useState(initFormVal)
const [potLuck, setPotluck] = useState([])

const submitPot = () => {
    axiosWithAuth()
    .post(`https://ft-potluck-planner-5.herokuapp.com/api/events`, initFormVal)
    .then((response) => {
        console.log(response)
        setPotluck([response.data, ...potLuck])
        setFormVal(initFormVal)
        push('/profile')
    })
    .catch(error => {
        console.log(error)
    })
  
}

const onChange = (evt) => {
    const { name, value } = evt.target
    setFormVal({...formVal, [name]: value})
}

    return(
        <Page>
        <form className='formContainer' onSubmit={submitPot}>
            <div className='potluckSubmit'>
                <h2>Organize a Potluck</h2>
                <button disabled={disabled}>submit</button>
            </div>
            <div className='inputs'>
                <h4>Potluck Info</h4>
                
                <label>
                    Name
                    <input
                      value={formVal.name}
                      onChange={onChange}
                      name='name'
                      type='text'
                    />
                </label>

                <label>
                    Date
                    <input 
                      value={formVal.date}
                      onChange={onChange}
                      name='date'
                      type='text'
                    />
                </label>

                <label>
                    Time
                    <input 
                      value={formVal.time}
                      onChange={onChange}
                      name='time'
                      type='text'
                    />
                </label>

                <label>
                    Location
                    <input 
                      value={formVal.location}
                      onChange={onChange}
                      name='location'
                      type='text'
                    />
                </label>

                <label>
                    Food
                    <input
                      value={formVal.food}
                      onChange={onChange}
                      name='food'
                      type='text'
                    />
                </label>

            </div>
        </form>
        </Page>
    );
};

export default Organize;