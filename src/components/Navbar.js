import React from 'react'
import './styles/Navbar.css'

function Navbar() {
    return (
        <nav className="position-fixed bottom-0 w-100 navbar navbar-expand-lg navbar-light" style={{zIndex: "1"}}>
            <div className="container-fluid">
                <h6 className="d-lg-none">Select Page</h6>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="bi bi-list" style={{ fontSize: "32px" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto">
                        <li className="nav-item active"><a className="navlink" href="/home/#ngo">NGOs HELP</a></li>
                        <li className="nav-item"><a className="navlink" href="/bookappointment">BOOK YOUR APPOINTMENT</a></li>
                        <li className="nav-item itemShop"><a className="navlink" href="#">PRESCRIPTION</a></li>
                        <li className="nav-item"><a className="navlink" href="/map.html">SEARCH CLINICS</a></li>
                        <li className="nav-item"><a className="navlink" href="/home/#connect">CONNECT</a></li>
                        <li className="nav-item"><a className="navlink" style={{ border: "none" }} href="/home/#donate">DONATE</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
