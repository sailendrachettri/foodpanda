import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { SERVER_URL } from '../environment';

const Navbar = () => {
    // VARIABLES
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(UserContext);

    // get the first name from user doc
    // const firstName = userInfo?.user?.fullname.split(" ")[0];
    const firstName = userInfo?.email?.split("@")[0];

    // get the looged in user information
    useEffect(() => {
        fetch(`${SERVER_URL}/api/auth/user/profile`, {
            credentials: 'include',

        }).then(response => {
            response.json().then(userDoc => {
                setUserInfo(userDoc)

            }).catch(() => {
                console.log("Failed to fetch profile information");
            })
        }).finally(() => {
            console.log("Server error - Failed to fetch profile information");
        })
    }, [setUserInfo]);

    const handleLogout = () => {

        fetch(`${SERVER_URL}/api/auth/user/logout`, {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null);

        navigate("/login");
    }


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
                                <li className='d-flex align-items-center nav-items'>
                                    {
                                        !firstName && (
                                            <>
                                                <Link to="/login" className='hover-btn nav-link mx-2'>Login</Link>
                                                <Link to="/signup" className='hover-btn nav-link mx-2'>Register</Link>
                                            </>
                                        )

                                    }

                                    {
                                        firstName && (
                                            <>
                                                <Link to="#" className='hover-btn mx-2' onClick={handleLogout}>Logout</Link>
                                                <span className='px-3'>Welcome, <span className='text-success fw-bold'>@{firstName}</span></span>
                                            </>
                                        )
                                    }
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link hover-btn">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/menu" className="nav-link hover-btn">Menu</Link>
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