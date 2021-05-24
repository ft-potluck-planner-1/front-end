import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/sign-up'>Sign-Up</Link>
        <Link to='/profile'>Profile</Link>

        <Switch>
          <Route path='/login'>
            {/* <Login /> */}
          </Route>
          
          <Route path='/sign-up'>
            {/* <SignUP /> */}
          </Route>

          <Route path='/profile'>
            {/* <Profile /> */}
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
