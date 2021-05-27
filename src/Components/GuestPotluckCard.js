import React from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { editPotluck } from '../actions/index';

const GuestPotluckCard = (props) => {
    const { potluck } = props;

    const history = useHistory();

    const handleClick = () => {
        history.push('/guest');
        editPotluck(potluck)
    }

    return(
        <div className='guest-potluck-card'>
            <h2>Guest</h2>
            <p>Date: {potluck.event_date}</p>
            <p>Time: {potluck.event_time}</p>
            <p>Location: {potluck.event_location}</p>
            {
                potluck.guests.map(guest => {
                    return <p>Guest: {guest.username}, {guest.response}</p>
                })
            }
            {
                potluck.items.map(item => {
                    return(
                        <p>Food/Assignment: {item.item_name}, {item.responsible_for}</p>
                    )
                })
            }
            <button onClick={handleClick}>RSVP/Assignments</button>
        </div>
    )
}

export default connect(null, {editPotluck})(GuestPotluckCard);