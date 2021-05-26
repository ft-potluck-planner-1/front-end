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
            <h2 className='organizer-name'>Organizer: {potluck.organizer}</h2>
            <button onClick={handleClickEdit}>Edit</button>
            <p>{potluck.event_date}</p>
            <p>{potluck._time}</p>
            <p>{potluck._location}</p>
            {
                potluck.items.map(item => {
                    return(
                        <div>
                            <p>{item.item_name}</p>
                            <p>{item.responsible_for}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrganizerPotluckCard;