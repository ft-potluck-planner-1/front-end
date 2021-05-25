import React from 'react';

const GuestPotluckCard = (props) => {
    const { potluck } = props;

    return(
        <div>
            <h2>Guest at Potluck</h2>
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
        </div>
    )
}

export default GuestPotluckCard;