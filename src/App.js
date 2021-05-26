import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile';
import Organize from './components/Organize';
import Guest from './components/Guest';



function App() {
  return (
    <Router> 
      <div className="App">
        <div className='nav-container'>
          <div className='company-container'>
            <img scr='#' alt='#' />
            <h2>Potluck Planner</h2>
          </div>
          
          <div className='links-container'>
            <Link to='/'>Home</Link>
            {!localStorage.getItem('token') ? <Link to='/login'>Login</Link> : <Link to='/'>Sign Out</Link>}
            {!localStorage.getItem('token') && <Link to='/sign-up'>Sign-up</Link>}
            {localStorage.getItem('token') && <Link to='/profile'>Profile</Link>}
            {/* remove profile link below once push from login/signup are done */}
            <Link to='profile'>Profile</Link>
          </div>
        </div>

        <Switch>
          <Route path='/login'>
             <Login /> 
          </Route>
          
          <Route path='/sign-up'>
            <SignUp />
          </Route>

          {/* make this a PrivateRoute */}
          <Route path='/profile' component={Profile} /> 

          <Route path='/organize'>
            <Organize />
          </Route>

          <Route path='/guest'>
            <Guest />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
