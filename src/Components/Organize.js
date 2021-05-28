import React, { useState } from 'react';
import axios from 'axios';

const initFormVal = {
    name: '',
    date: '',
    time: '',
    location: '',
    food: ''
}

const Organize = (props) => {
const { values, submit, change, disabled } = props;
const [formVal, setFormVal] = useState(initFormVal)
const [potLuck, setPotluck] = useState([])

const submitPot = (data) => {
    axios
    .post(`https://ft-potluck-planner-5.herokuapp.com/api/events`, data)
    .then(response => {
        console.log(response)
        setFormVal(response.data)
    })
    .catch(error => {
        console.log(error)
    })
    // const newPotluck = {
    //     name: formVal.name.trim(),
    //     date: formVal.date.trim(),
    //     time: formVal.time.trim(),
    //     location: formVal.location.trim(),
    //     food: formVal.food.trim()
    // }
    // setPotluck([...potLuck, setPotluck])
}

const onChange = (evt) => {
    const { name, value } = evt.target
    setFormVal({...formVal, [name]: value})
}

    return(
        <form className='form container' onSubmit={submitPot}>
            <div className='potluck submit'>
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
    );
};

export default Organize;