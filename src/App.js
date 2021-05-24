import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
// import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import Profile from './components/Profile';



function App() {
  return (
    <Router> 
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/sign-up'>Sign-Up</Link>
       {localStorage.getItem('token') && <Link to='/profile'>Profile</Link>}

        <Switch>
          <Route path='/login'>
            {/* <Login /> */}
          </Route>
          
          <Route path='/sign-up'>
            {/* <SignUP /> */}
          </Route>

          <PrivateRoute path='/profile' component={Profile} />

          <Route path='/'>
            {/* <Home /> */}
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
