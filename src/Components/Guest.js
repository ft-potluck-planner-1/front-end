// this is for RSVP.... need to add functionality to choose food to bring

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const initialResponse = {
    rsvp: '',
    guest_id: '',
}

const initialAssignments = {
    item_name: '',
    responsible_for: '',
}

const Guest = (props) => {
    const { event_id, user_id, potluck } = props // this needs to be passed in from somewhere, user_id is from Login, potluck is same as state in guestPotluckCard

    const [ response, setResponse ] = useState(initialResponse);
    const [ assignments, setAssignments ] = useState(initialAssignments);


    //pass in potluck where event_id matches e.target -> this potluck will have items in data

    useEffect(() => { // this is for guest response
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
            <div className='guest-potluck-card'>
            <p>{potluck.event_date}</p>
            <p>{potluck.event_time}</p>
            <p>{potluck.event_location}</p>
            <p>{potluck.organizer}</p>
            <p>{potluck.organizer}</p>
            <form onSubmit={handleSubmit}>
                <p>Will you be attending the potluck?</p>
                <label> Yes
                    <input 
                        type='radio' 
                        name='response' 
                        value='yes'
                        checked={response.rsvp === 'yes'}
                        onChange={onChange}
                        />
                </label>
                <label> No
                    <input 
                        type='radio' 
                        name='response' 
                        value='no'
                        checked={response.rsvp === 'no'}
                        onChange={onChange}
                        />
                </label>
                {
                    response.rsvp === 'yes' &&
                        potluck.items.map(item => {
                            return(
                                <div>
                                    <p>{item.item_name}</p>
                                    <p>{item.responsible_for}</p>
                                </div>
                            )
                        })
                }
            </form>
        </div>

        </div>
    )
}

export default Guest;