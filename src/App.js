import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login/Login';
import Profile from './components/Profile';
import Organize from './components/Organize';
import Guest from './components/Guest';


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
