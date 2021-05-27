import React from 'react';
import { useHistory } from 'react-router-dom'

const Home = () => {

    const { push } = useHistory()

    const login = () => {
        push('/login')
    }

    const signup = () => {
        push('/sign-up')
    }

    return(
        <div className='home-container'>
            <div className='hero-img'>
                <h1>Potluck Planner</h1>
                <button onClick={login}>Login</button>
                <button onClick={signup}>Sign Up</button>
            </div>
            <div className='about-container'>
                <h2>Plan, Organize, Coordinate All In One Place</h2>
                <p>If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. With Potluck Planner you have all the tools you need to have a successful potluck without all the headache and confusion that you've had to deal with in the past. After creating your Potluck Planner account you can organize and plan your potluck, invite others to join, see what everyone is bringing, and make any necessary edits all in one place. Potluck Planner is also for guests that are just attending a potluck. You can confirm or decline upcoming potluck's you've been invited to attend as well as specify what you plan to bring to the potluck.</p>
                <div>
                    <img src='#' alt='' />
                    <img src='#' alt='' />
                    <img src='#' alt='' />
                    <img src='#' alt='' />
                </div>
            </div>

        </div>
    );
};

export default Home;