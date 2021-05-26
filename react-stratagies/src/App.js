import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Switch>  
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Redirect to="/login"/>
          </Switch>
        </Router>
        {/* <Login /> */}
        <br/>
    </div>
  );
}

export default App;
