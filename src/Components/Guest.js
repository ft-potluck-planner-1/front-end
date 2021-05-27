// this is for RSVP and picking a food to bring
//not functional yet

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const initialResponse = {
    rsvp: '',
    guest_id: '', // will be coming from reducer instead of local state
}

const initialAssignments = {
    item_name: '',
    responsible_for: '',
}

const Guest = (props) => {
    const { user_id, potluck } = props // this needs to be passed in from somewhere, user_id is from Login, potluck is same as state in guestPotluckCard

    const [ response, setResponse ] = useState(initialResponse);
    const [ assignments, setAssignments ] = useState(initialAssignments); // still need to make assignments functionality


    //pass in potluck where event_id matches e.target -> this potluck will have items in data

    useEffect(() => { // this is for guest response
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/${props.guestPotluck.event_id}/guests`, response)
            .then(res => {
                console.log('guest', res);
                //setResponse
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        // set response to update rsvp with name/value
        // use guest id from reducer to 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //push back to profile
    }

    return(
        <div>
            <div className='guest-potluck-card'>
            <p>{props.guestPotluck.event_date}</p>
            <p>{props.guestPotluck.event_time}</p>
            <p>{props.guestPotluck.event_location}</p>
            <p>{props.guestPotluck.organizer}</p>
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
            </form>
        </div>

        </div>
    )
}

const mapToStateProps = (state) => {
    return({
        guestPotluck: state.guestPotluck
    })
}

export default connect(mapToStateProps)(Guest);