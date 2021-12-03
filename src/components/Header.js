import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useStateValue } from './StateProvider'
import './styles/Header.css'
import { auth } from '../firebase'

function Header() {
    const [{ user }] = useStateValue()
    const navigate = useNavigate()
    const logout = () => {
        auth.signOut()
        navigate('/')
    }
    return (<>
        <div className="d-flex max_width justify-content-between align-items-center mt-3 mb-3">
            <Link to="/home"><img
                className="logo"
                src="/assets/upchaar.png"
                alt="logo"
            /></Link>
            <div className="search position-relative">
                <input placeholder="SEARCH" />
                <i className="bi bi-search"></i>
            </div>
            <ul className="d-flex ul">
                <li>
                    <i className="bi bi-phone"></i>
                    <div title="Don't have smart phone try this out.">+1(725) 227-9887</div>
                </li>
                <li>
                    <Link to="/profile">
                        <i class="bi bi-person-circle"></i>
                        <div>{user ? user.email : "My Profile"}</div>
                    </Link>
                </li>
                <li onClick={logout} style={{ cursor: "pointer" }}>
                    <i class="bi bi-box-arrow-left"></i>
                    <div>Sign Out</div>
                </li>
            </ul>
        </div>
        <div className="b_b"></div>
    </>
    )
}

export default Header
