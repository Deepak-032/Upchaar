import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import BookAppointment from './components/BookAppointment';

function App() {
  
  return (
    <Router>
      <Fragment>
        <div className="app">
          <Switch>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/bookappointment" element={<BookAppointment />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/home" element={<Homepage />} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
