// this is for RSVP.... need to add functionality to choose food to bring

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const initialState = {
    response: '',
    guest_id: '',
}

const Guest = (props) => {
    const { event_id, user_id } = props // this needs to be passed in from somewhere, user_id is from Login

    const [ response, setResponse ] = useState(initialState);

    useEffect(() => {
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/${event_id}/guests`, response)
            .then(res => {
                console.log(res);
                //setResponse
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        setResponse({...response, [name]: value, guest_id: user_id});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <h2>Bring Food</h2>
            <form onSubmit={handleSubmit}>
                <p>Will you be attending the potluck?</p>
                <label> Yes
                    <input 
                        type='radio' 
                        name='response' 
                        value='yes'
                        checked={response === 'yes'}
                        onChange={onChange}
                        />
                </label>
                <label> No
                    <input 
                        type='radio' 
                        name='response' 
                        value='no'
                        checked={response === 'no'}
                        onChange={onChange}
                        />
                </label>
            </form>
        </div>
    )
}

export default Guest;