import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <h1 className="h1 logo">Restaurant</h1>
                            <p className="h5 text-muted">Get the world's best teast</p>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link hover-btn">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/menu" className="nav-link hover-btn">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link hover-btn">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link hover-btn">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"><span
                                        className="material-symbols-outlined text-primary">shopping_cart</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar