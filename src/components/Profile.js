import React from 'react'
import { useStateValue } from './StateProvider'
import Header from './Header'
import { useState } from 'react';
import { Link } from "react-router-dom"
import Navbar from './Navbar';

function Profile() {
    const [{ user }] = useStateValue()
    const [edit, setEdit] = useState(false)
    const [health, setHealth] = useState(false)
    return (
        <>
            <Header /><hr />
            <div className="max_width input">
                <h4 className="text-center bg_blue pt-3 pb-3">MY PROFILE</h4><br />
                {edit ? <div className="border p-3">
                    <div className="mt-2">
                        <h6 className="me-2">Your Photograph</h6>
                        <input type="file" />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Full Name</h6>
                        <input />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Email</h6>
                        <input type="email" value="" />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Mobile Number</h6>
                        <input type="number" value="" />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Gender</h6>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">DOB</h6>
                        <input type="date" />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Area Pincode</h6>
                        <input type="number" />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">State</h6>
                        <input />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">City</h6>
                        <input />
                    </div>
                    <div className="mt-2">
                        <h6 className="me-2">Address</h6>
                        <input />
                    </div>
                    <button className="btn btn-primary mt-2" onClick={() => setEdit(false)}>SAVE DETAILS</button>
                </div>
                    :
                    <button className="btn btn-primary" onClick={() => setEdit(true)}>Personal Details <i class="bi bi-pencil"></i></button>
                }<div className="mt-3" />
                {health ?
                    <div className="border p-3">
                        <div className="mt-2">
                            <h6 className="me-2">Describe the problem you are facing</h6>
                            <input />
                        </div>
                        <div className="mt-2">
                            <h6 className="me-2">Estimated amount required for the treatment as quoted by doctor in &#8377;</h6>
                            <input />
                        </div>
                        <Link to="/home" className="btn btn-primary ngo_link">Publish <i class="bi bi-check-square"></i></Link>
                    </div>
                    :
                    <button className="btn btn-primary" onClick={() => setHealth(true)}>Health Status <i class="bi bi-pencil"></i></button>
                }
            </div>
            <footer className="footer mt-4"></footer>
            <Navbar />
        </>
    )
}

export default Profile
