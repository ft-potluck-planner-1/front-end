import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login/Login';
import Profile from './Components/Profile';
import Organize from './Components/Organize';
import Guest from './Components/Guest';

function App() {

  const handleSignOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router> 
      <div className="App">
        <div className='nav-container'>
          <div className='company-container'>
            <h2>Potluck Planner</h2>
          </div>

          <div className='links-container'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/sign-up'>Sign-up</Link>
            <Link onClick={handleSignOut} to='/'>Sign Out</Link>
          </div>
        </div>

        <Switch>
          <Route path='/guest'>
            <Guest />
          </Route>

          <Route path='/login'>
             <Login /> 
          </Route>
          
          <Route path='/organize'>
            <Organize />
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <PrivateRoute path='/profile' component={Profile} /> 

          <Route exact path='/'>
            <Home />
          </Route>  
        </Switch>

      </div>
    </Router>
  );
}

export default App;
