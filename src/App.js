import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import BookAppointment from './components/BookAppointment';
import { auth } from "./firebase"
import { useStateValue } from "./components/StateProvider";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loading, setLoading] = useState(true)
  const [, dispatch] = useStateValue()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      dispatch({ type: 'SET_USER', user: authUser })
      setLoading(false)
    })
    return () => unsubscribe()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      {!loading &&
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/bookappointment" element={<PrivateRoute> <BookAppointment /> </PrivateRoute>} />
          <Route exact path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
          <Route exact path="/home" element={<PrivateRoute> <Homepage /> </PrivateRoute>} />
        </Routes>
      }
    </Router>
  );
}

export default App;
