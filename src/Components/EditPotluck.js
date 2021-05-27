import React, { useState } from 'react';
import axios from 'axios';


const initialFormValues = {
    name: '',
    date: '',
    location: '',
    food: '',
}


const initialPotlucks = []


const PotluckEdit = () => {
    // States
    const [potlucks, setPotlucks] = useState()
    const [formValues, setFormValues] = useState(initialFormValues) 

    // Helpers
    const getPotluck = () => {

        axios.get('https://ft-potluck-planner-5.herokuapp.com/api/events/:event_id')
          .then(res => {
            setPotlucks(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }

    const updatePotluck = updatedPotluck => {

        axios.put('https://ft-potluck-planner-5.herokuapp.com/api/events/:event_id', updatedPotluck)
            .then(res => {
                setPotlucks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='potluck-card container'>

            <form id='edit-potluck'>

                <div className='edit-inputs'>

                <h2>Potluck:</h2>

                <label>Name
                    <input
                        value={formValues.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='previous information thats going to be edited goes here?'
                    />
                </label>

                <label>Date
                    <input
                        value={formValues.date}
                        onChange={onChange}
                        name='date'
                        type='text'
                        placeholder='Previous information to edit goes here?'
                    />
                </label>

                <label>Location
                    <input
                        value={formValues.location}
                        onChange={onChange}
                        name='location'
                        type='text'
                        placeholder='Previous information to edit goes here?'
                    />
                </label>

                <label>Food
                    <input
                        value={formValues.food}
                        onChange={onChange}
                        name='food'
                        type='text'
                        placeholder='Previous information to edit goes here?'
                    />
                </label>

                </div>
            </form>

            <button onClick={updatePotluck}>Save</button>
        </div>
    )
}

export default PotluckEdit