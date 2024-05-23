import React from 'react'

import dish_image_1 from "../assets/dishes/dish_3.png";
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <>
    <section className="row first-section">
                <div className="col-md-6 mt-4 order-sm-first order-last">
                    <h1 className="mt-4 display-3">Delicious Food is Wating for You</h1>
                    <Link to="/menu">
                        <button className="btn btn-dark mt-5 rounded-start">Get menu &#x279E;</button>
                    </Link>
                    <div className="mt-5">
                        <span className="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            lunch_dining
                        </span>
                        <span className="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            sports_bar
                        </span>
                        <span className="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            liquor
                        </span>
                        <span className="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            restaurant
                        </span>
                        <span className="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            local_cafe
                        </span>
                    </div>
                </div>
                <div className="col-md-6 order-xs-first order-sm-first order-first">
                    <img src={dish_image_1} className="img-fluid hero-image" alt="Soupe dish right side" />
                </div>
            </section>
    </>
  )
}

export default Landingpage