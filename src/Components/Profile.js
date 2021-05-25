import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrganizerPotluckCard from './OrganizerPotluckCard';
import GuestPotluckCard from './GuestPotluckCard';


const Profile = (props) => {
    const { user_id } = props
    const [ organizerPotlucks, setOrganizerPotlucks ] = useState([]);
    const [ guestPotlucks, setGuestPotlucks] = useState([]);

    useEffect(() => {
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/organizer/${user_id}}`)
            .then(res => {
                console.log('res: ', res);
                // setOrganizerPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    useEffect(() => {
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/guest/${user_id}}`)
            .then(res => {
                console.log('res: ', res);
                // setGuestPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return(
        <div>
            <h1>Profile Page</h1>
            <button>Start New Potluck</button>
            
            {/* need to adjust according to axios return */}
            {organizerPotlucks.map(event => {
                return(
                    <OrganizerPotluckCard key={Math.random()} potluck={event}/>
                    )
                })}

            {/* need to adjust according to axios return */}
            {guestPotlucks.map(event => {
                return(
                    <GuestPotluckCard key={Math.random()} potluck={event}/>
                )
            })}

          
        </div>
    )
}

export default Profile;