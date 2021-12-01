import React from 'react'
import Card from './Card'
import Header from './Header'
import HomeComponents from './HomeComponents'
import Navbar from './Navbar'

function Homepage() {
    return (
        <>
            <Header />
            <Navbar />
            <HomeComponents />
            <div className="max_width mt-4">
                <div className="d-flex pb-5 pt-5">
                    <div className="bg_blue border p-4 me-3">
                        <div className="d-flex align-items-end max_width">
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <div style={{ flex: "1" }}>
                                <h4>Savita</h4>
                                <h5>Need help for her treatement!</h5>
                            </div>
                        </div>
                        <button className="btn btn1 mt-3 btn-primary">CHECK DETAILS</button>
                    </div>
                    <div className="bg_brown border p-4 me-3">
                        <div className="d-flex align-items-end max_width">
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <div style={{ flex: "1" }}>
                                <h4>Naveen</h4>
                                <h5>Need help for his treatement!</h5>
                            </div>
                        </div>
                        <button className="btn btn1 mt-3 btn-primary">CHECK DETAILS</button>
                    </div>
                    <div className="bg_blue border p-4">
                        <div className="d-flex align-items-end max_width">
                            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <div style={{ flex: "1" }}>
                                <h4>Ramu</h4>
                                <h5>Need help for his treatement!</h5>
                            </div>
                        </div>
                        <button className="btn btn1 mt-3 btn-primary">CHECK DETAILS</button>
                    </div>
                </div>
                <div id="ngo" className="mt-4">
                    <div style={{ borderBottom: "4px solid #a2c9c9", width: "80px" }}></div>
                    <h4 className="">OUR PARTNERS</h4>
                    <div className="d-flex mt-4">
                        <Card name="NGO 1" imgSrc="/assets/ngo1.png" />
                        <Card name="NGO 2" imgSrc="/assets/ngo1.png" />
                        <Card name="NGO 3" imgSrc="/assets/ngo1.png" />
                        <Card name="NGO 4" imgSrc="/assets/ngo1.png" />
                    </div>
                </div>
            </div>
            <div className="mt-5 p-5 bg_brown text-center">
                <p className="max_width">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div id="connect" className="border max_width mt-5 d-flex input">
                <div className="col-6 p-3">
                    <div style={{ borderBottom: "4px solid #a2c9c9", width: "80px" }}></div>
                    <h4>BE THE PART OF THE FAMILY</h4><br />
                    <h6>NGO name</h6>
                    <input />
                    <h6>Head name</h6>
                    <input />
                    <h6>Location</h6>
                    <input />
                    <h6>Contact number</h6>
                    <input type="number" />
                    <button className="btn btn-primary" >CONNECT</button>
                </div>
                <div className="col-6">
                    <img src="/assets/Connect.jpg" className="w-100 h-100" />
                </div>
            </div>
            <div className="mt-5 p-5 bg_blue text-center">
                <p className="max_width">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div id="donate" className="border max_width mt-5 d-flex input">
                <div className="col-6">
                    <img src="/assets/donate2.jpg" className="w-100 h-100" />
                </div>
                <div className="col-6 p-3">
                    <div style={{ borderBottom: "4px solid #a2c9c9", width: "80px" }}></div>
                    <h4>LET'S SAVE SOMEONE'S LIFE</h4><br />
                    <h6>Your name</h6>
                    <input />
                    <h6>Organization name (if any)</h6>
                    <input />
                    <h6>Contact number</h6>
                    <input type="number" />
                    <button className="btn btn-primary" >Donate</button>
                </div>
            </div>

            <footer className="footer mt-4"></footer>
        </>
    )
}

export default Homepage
