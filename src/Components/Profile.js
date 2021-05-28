import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OrganizerPotluckCard from './OrganizerPotluckCard';
import GuestPotluckCard from './GuestPotluckCard';
import { connect } from 'react-redux';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const Profile = (props) => {
    const [ organizerPotlucks, setOrganizerPotlucks ] = useState([]);
    const [ guestPotlucks, setGuestPotlucks] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`https://ft-potluck-planner-5.herokuapp.com/api/events/organizer/${props.user_id}`)
            .then(res => {
                setOrganizerPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        axiosWithAuth()
            .get(`https://ft-potluck-planner-5.herokuapp.com/api/events/guest/${props.user_id}`)
            .then(res => {
                setGuestPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    } ,[props.user_id])


    const handleClick = () => {
        history.push('/organize')
    }

    return(
        <div className='potluck-list-container'>
            <h2 className='profile-welcome'>{props.message}</h2> 
            <button onClick={handleClick}>Start New Potluck</button>
            
            {organizerPotlucks.map(event => {
                return(
                    <OrganizerPotluckCard key={Math.random()} potluck={event}/>
                    )
                })}

            {guestPotlucks.map(event => {
                return(
                    <GuestPotluckCard key={Math.random()} potluck={event}/>
                )
            })}

          
        </div>
    )
}

const mapToStateProps = (state) => {
    return({
        message: state.message,
        user_id: state.user_id
    });
}

export default connect(mapToStateProps)(Profile);