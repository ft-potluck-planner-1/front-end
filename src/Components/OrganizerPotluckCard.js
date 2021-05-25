import React from 'react';


const OrganizerPotluckCard = (props) => {
    const { potluck } = props
    return(
        <div>
            <h2>Potluck</h2>
            {potluck.role === 'loginName' && <button>Edit</button>}
            <p>{potluck.date}</p>
            <p>{potluck.time}</p>
            <p>{potluck.location}</p>
            {potluck.food.map(item => <p key={Math.random()}>{item}</p>)}

        </div>
    )
}

export default OrganizerPotluckCard;