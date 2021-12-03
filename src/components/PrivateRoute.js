import React from "react"
import { Navigate } from "react-router-dom"
import { useStateValue } from "./StateProvider";

function PrivateRoute({ children }) {
    const [{user}] = useStateValue()
    return user ? children : <Navigate to="/" />;
}

export default PrivateRoute
