import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const Guest = (props) => {
    const { potluck, id } = props;

    const [ response, setResponse ] = useState({
        rsvp: '',
        guest_id: id
    });

    const { push } = useHistory();

    const onChange = (e) => {
        const { name, value } = e.target;
        setResponse({
            ...response,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://ft-potluck-planner-5.herokuapp.com/api/events/${potluck.event_id}/guests`, response)
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
            <p>{potluck.event_date}</p>
            <p>{potluck.event_time}</p>
            <p>{potluck.event_location}</p>
            <p>{potluck.organizer}</p>
            <form onSubmit={handleSubmit}>
                <p>Will you be attending the potluck?</p>
                <label> Yes
                    <input 
                        type='radio' 
                        name='rsvp' 
                        value='yes'
                        checked={response.rsvp === 'yes'}
                        onChange={onChange}
                        />
                </label>

                <label> No
                    <input 
                        type='radio' 
                        name='rsvp' 
                        value='no'
                        checked={response.rsvp === 'no'}
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
        potluck: state.guestPotluck,
        id: state.guest_id
    })
}

export default connect(mapToStateProps)(Guest);