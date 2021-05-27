import React from 'react';
import { useHistory } from 'react-router-dom';

const OrganizerPotluckCard = (props) => {
    const { potluck } = props


    const history = useHistory();

    const handleClickEdit = () => {
        history.push(`/profile/edit-organized/${potluck.event_id}`);
    };

    return(
        <div className='organizer-potluck-card'>
            <h2>Organizer</h2>
            <p>Date: {potluck.event_date}</p>
            <p>Time: {potluck._time}</p>
            <p>Location: {potluck._location}</p>
            {
                potluck.items.map(item => {
                    return(
                        <p>Food/Assignment: {item.item_name}, {item.responsible_for}</p>
                    )
                })
            }
            <button onClick={handleClickEdit}>Edit</button>
        </div>
    )
}

export default OrganizerPotluckCard;