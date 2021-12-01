import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

function BookAppointment() {
    return (
        <>
            <Header />
            <h2 className="max_width mt-5">
                <div style={{ borderBottom: "4px solid #a2c9c9", width: "80px" }}></div>
                OUR LIFE SAVERS</h2>
            <div className="border bg_brown mt-5 pt-3 pb-3">
                <div className=" d-flex align-items-end max_width">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <div style={{ flex: "1" }}>
                        <h4>Dr. Roy</h4>
                        Cardiologist
                    </div>
                    <a href="https://calendly.com/somnath-ray/appointment" className="btn btn1 btn-primary">BOOK APPOINTMENT</a>
                </div>
                <p className="max_width mt-4"><b>Phone number:</b> 02226152925 <br /><b>Street:</b> 6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w)<br /> <b>City:</b> Mumbai <br /><b>State:</b> Maharashtra, India <br /><b>Zip code:</b> 400054</p>
            </div>

            <div className="border bg_blue mt-5 pt-3 pb-3">
                <div className=" d-flex align-items-end max_width">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <div style={{ flex: "1" }}>
                        <h4>Dr. Shetty</h4>
                        Cardiologist
                    </div>
                    <a href="https://calendly.com/swatilekha-roy/cardiologist-appointment-dr-shetty" className="btn btn1 btn-primary">BOOK APPOINTMENT</a>
                </div>
                <p className="max_width mt-4"><b>Phone number:</b> 02226152925 <br /><b>Street:</b> 6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w)<br /> <b>City:</b> Mumbai <br /><b>State:</b> Maharashtra, India <br /><b>Zip code:</b> 400054</p>
            </div>
            <div className="border bg_brown mt-5 pt-3 pb-3">
                <div className=" d-flex align-items-end max_width">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <div style={{ flex: "1" }}>
                        <h4>Dr. Ramesh Narayanan</h4>
                        Gynecologist
                    </div>
                    <a href="https://calendly.com/rameshnarayanan/appointment" className="btn btn1 btn-primary">BOOK APPOINTMENT</a>
                </div>
                <p className="max_width mt-4"><b>Phone number:</b> 02226152925 <br /><b>Street:</b> 6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w)<br /> <b>City:</b> Mumbai <br /><b>State:</b> Maharashtra, India <br /><b>Zip code:</b> 400054</p>
            </div>
            <div className="border bg_blue mt-5 pt-3 pb-3">
                <div className=" d-flex align-items-end max_width">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <div style={{ flex: "1" }}>
                        <h4>Dr. Nishi Rampersaud</h4>
                        Oncologist
                    </div>
                    <a href="https://calendly.com/nishirampersaud/appointment" className="btn btn1 btn-primary">BOOK APPOINTMENT</a>
                </div>
                <p className="max_width mt-4"><b>Phone number:</b> 02226152925 <br /><b>Street:</b> 6, Omkar Apts, Opp National Garage, S V Road, Santacruz(w)<br /> <b>City:</b> Mumbai <br /><b>State:</b> Maharashtra, India <br /><b>Zip code:</b> 400054</p>
            </div>
            <footer className="footer mt-4"></footer>
            <Navbar />
        </>
    )
}

export default BookAppointment
