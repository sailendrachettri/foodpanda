import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="row pt-5">
                <div className="col-md-3">
                    <h1 className="logo">Restaurant</h1>
                    <p className="text-muted">Get the world's best teast</p>
                </div>
                <div className="col-md-3">
                    <h2>Service</h2>
                    <div>
                        <Link to="/" className="text-muted text-decoration-none"><p>Pricing</p></Link>
                        <Link to="/" className="text-muted text-decoration-none"><p>Home delivery</p></Link>
                        <Link to="/" className="text-muted text-decoration-none"><p>Terms of Service</p></Link>
                        <Link to="/" className="text-muted text-decoration-none"><p>Read our Bolg</p></Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2>Company</h2>
                    <Link to="/" className="text-muted text-decoration-none"><p>Reporting</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>Get In Touch</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>Management</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>Refund policy</p></Link>
                </div>
                <div className="col-md-3">
                    <h2>Address</h2>
                    <Link to="/" className="text-muted text-decoration-none"><p>12 King Rd.</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>Gangtok Sikkim</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>+91 982 9890 425</p></Link>
                    <Link to="/" className="text-muted text-decoration-none"><p>info@birestruent.com</p></Link>
                </div>
            </footer>
        </>
    )
}

export default Footer