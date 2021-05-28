import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { guestResponse } from '../actions/index';


const Guest = (props) => {
    const { guestPotluck, user_id } = props;
    
    const [ rsvp, setRsvp ] = useState({
        response: '',
        guest_id: user_id
    });


    const { push } = useHistory();

    const onChange = (e) => {
        const { name, value } = e.target;
        setRsvp({
            ...rsvp,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://ft-potluck-planner-5.herokuapp.com/api/events/${guestPotluck.event_id}/guests`, rsvp)
            .then(res => {
                push('/profile')
            })
            .catch(err => {
                console.log(err);
            })
    }


    return(
        <div>
            <div className='guest-potluck-card'>
            <p>{guestPotluck.event_date}</p>
            <p>{guestPotluck.event_time}</p>
            <p>{guestPotluck.event_location}</p>
            <p>{guestPotluck.organizer}</p>
            <form onSubmit={handleSubmit}>
                <p>Will you be attending the potluck?</p>
                <label> Yes
                    <input 
                        type='radio' 
                        name='response' 
                        value='yes'
                        checked={rsvp.response === 'yes'}
                        onChange={onChange}
                        />
                </label>

                <label> No
                    <input 
                        type='radio' 
                        name='response' 
                        value='no'
                        checked={rsvp.response === 'no'}
                        onChange={onChange}
                        />
                </label>

                <button>Save RSVP</button>
            </form>
        </div>

        </div>
    )
}

const mapToStateProps = (state) => {
    return({
        guestPotluck: state.guestPotluck,
        user_id: state.user_id,
        userName: state.userName
    });
}

export default connect(mapToStateProps, {guestResponse})(Guest);