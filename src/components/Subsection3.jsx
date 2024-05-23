import React from 'react'

import apple_icon from "../assets/icons/appstore.png";
import playstore_icon from "../assets/icons/google_play.png";

const Subsection3 = () => {
  return (
    <>
        <section className="row fifth-section pt-5 mt-5">
                <div className="col-md-6 mb-5">
                    <h4>Let's Talk</h4>
                    <h2>Want to Reserve a Table?</h2>
                    <p className="my-4">Want to reserve a table? It's quick and easy with our online booking system. Secure
                        your spot now for a delightful dining experience.</p>
                    <button className="btn btn-dark">Contact Now</button>
                </div>
                <div className="col-md-6">
                    <h1>App is Available</h1>
                    <p className="my-3">Our app is available to download for instant access to all our services. Enjoy
                        exclusive
                        deals, seamless ordering, and real-time updates. Get it today and enhance your experience with
                        just
                        a tap.</p>
                    <img src={apple_icon} className="img-fluid playstore-icon" alt="Appstore icon" />
                    <img src={playstore_icon} className="img-fluid appstore-icon" alt="Playstore icon" />
                </div>
            </section>
    </>
  )
}

export default Subsection3