import React, { useState } from 'react'
import "./styles/Login.css"
import { useNavigate } from "react-router-dom"
import { auth } from '../firebase'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const login = async event => {
        event.preventDefault()
        try {
            setLoading(true)
            await auth.signInWithEmailAndPassword(email, password)
            navigate('/home')
        } catch (e) {
            alert(e.message)
        }
        setLoading(false)
    }
    const register = async event => {
        event.preventDefault()
        try {
            setLoading(true)
            await auth.createUserWithEmailAndPassword(email, password)
            navigate('/home')
        } catch (e) {
            alert(e.message)
        }
        setLoading(false)
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
                    <button type="submit" disabled={loading} onClick={login} style={{ color: "#fff" }}>Sign In</button>
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
