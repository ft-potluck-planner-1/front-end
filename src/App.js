import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
// import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';



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
          </div>
        </div>

        <Switch>
          <Route path='/login'>
            {/* <Login /> */}
          </Route>
          
          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <PrivateRoute path='/profile' component={Profile} />

          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
