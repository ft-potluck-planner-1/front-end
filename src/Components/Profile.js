import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import OrganizerPotluckCard from './OrganizerPotluckCard';
import GuestPotluckCard from './GuestPotluckCard';


const Profile = (props) => {
    const { loginRes } = props // user_id comes from Login component's axios.post, pass in through redux or context -> register post endpoint doesn't come with token - have SignUp redirect to LogIn if needed
    const [ organizerPotlucks, setOrganizerPotlucks ] = useState([]);
    const [ guestPotlucks, setGuestPotlucks] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/organizer/${loginRes.user_id}}`) // user_id comes from state
            .then(res => {
                console.log('res: ', res);
                // setOrganizerPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    useEffect(() => {
        axios.get(`https://ft-potluck-planner-5.herokuapp.com/api/events/guest/${loginRes.user_id}}`) // user_id comes from state
            .then(res => {
                console.log('res: ', res);
                // setGuestPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleClick = () => {
        history.push('/organize') // make sure to change to correct route name
    }

    return(
        <div className='potluck-list-container'>
            <h2 className='profile-welcome'>{loginRes.message}</h2> 
            <button onClick={handleClick}>Start New Potluck</button>
            
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