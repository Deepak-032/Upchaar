import React, { useState } from 'react'
import "./styles/Login.css"
import { useNavigate } from "react-router-dom"
import { auth } from '../firebase'
import { useStateValue } from './StateProvider'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [{ user }, dispatch] = useStateValue()

    const login = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                dispatch({
                    type: "LOGED_IN",
                })
                navigate('/home', { replace: true })
            })
            .catch((e) => alert(e.message))
    }
    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                dispatch({
                    type: "LOGED_IN",
                })
                navigate('/home', { replace: true })
            })
            .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <img
                className="login_logo"
                src="/assets/upchaar.png"
                alt="upchaar"
            />
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h6>E-mail</h6>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h6>Password</h6>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button type="submit" onClick={login} style={{ color: "#fff" }}>Sign In</button>
                </form>
            </div>
            <div className="create_account">
                <h6> Don't have account? </h6>
                <div></div>
                <button onClick={register}>Create new account</button>
            </div>
        </div>
    )
}

export default Login
