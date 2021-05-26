import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import OrganizerPotluckCard from './OrganizerPotluckCard';
// import GuestPotluckCard from './GuestPotluckCard';
import { connect } from 'react-redux';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const Profile = (props) => {
    // const { loginRes } = props // user_id comes from Login component's axios.post, pass in through redux or context -> register post endpoint doesn't come with token - have SignUp redirect to LogIn if needed
    const [ organizerPotlucks, setOrganizerPotlucks ] = useState([]);
    const [ guestPotlucks, setGuestPotlucks] = useState([]);

    const history = useHistory();
    console.log('props', props);
    console.log('userId:', props.user_id);

    useEffect(() => {
        axiosWithAuth()
            .get(`https://ft-potluck-planner-5.herokuapp.com/api/events/organizer/${props.user_id}}`) 
            .then(res => {
                console.log('res: ', res);
                // setOrganizerPotlucks(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    useEffect(() => {
        axiosWithAuth()
            .get(`https://ft-potluck-planner-5.herokuapp.com/api/events/guest/${props.user_id}}`)
            .then(res => {
                console.log('res2: ', res);
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
            {/* <h2 className='profile-welcome'>{props.message}</h2>  */}
            <button onClick={handleClick}>Start New Potluck</button>
            
            {/* need to adjust according to axios return */}
            {organizerPotlucks.map(event => {
                return(
                    console.log('organizer')
                    // <OrganizerPotluckCard key={Math.random()} potluck={event}/>
                    )
                })}

            {/* need to adjust according to axios return */}
            {guestPotlucks.map(event => {
                return(
                    console.log('guest')
                    // <GuestPotluckCard key={Math.random()} potluck={event}/>
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