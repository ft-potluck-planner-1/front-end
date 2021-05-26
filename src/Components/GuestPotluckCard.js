import React from 'react';
import { useHistory } from 'react-router';

const GuestPotluckCard = (props) => {
    const { potluck } = props;

    const history = useHistory();

    const handleClick = () => {
        history.push('/guest');
    }

    return(
        <div className='guest-potluck-card'>
            <p>{potluck.event_date}</p>
            <p>{potluck.event_time}</p>
            <p>{potluck.event_location}</p>
            <p>{potluck.organizer}</p>
            <p>{potluck.organizer}</p>
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
            <button onClick={handleClick}>View Potluck</button>
        </div>
    )
}

export default GuestPotluckCard;