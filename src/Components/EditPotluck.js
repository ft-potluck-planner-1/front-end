import React, { useState } from 'react';
import axios from 'axios';

import { editPotluck } from '../actions/index';
import { connect } from 'react-redux';



const initialFormValues = {
    name: '',
    date: '',
    location: '',
    food: '',
}


const initialPotlucks = []


const PotluckEdit = (props) => {
    const { potluck } = props; // potluck will now be an object for an individual potluck. ex: potluck.event_id should work for event id
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

const mapToStateProps = (state) => {
    return({
        potluck: state.organizerPotluck
    });
}

export default connect(mapToStateProps, {editPotluck})(PotluckEdit);