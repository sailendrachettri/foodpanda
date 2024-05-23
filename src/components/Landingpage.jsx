import React from 'react'

import dish_image_1 from "../assets/dishes/dish_3.png";
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <>
    <section class="row first-section">
                <div class="col-md-6 mt-4 order-sm-first order-last">
                    <h1 class="mt-4 display-3">Delicious Food is Wating for You</h1>
                    <Link to="/menu">
                        <button class="btn btn-dark mt-5 rounded-start">Get menu &#x279E;</button>
                    </Link>
                    <div class="mt-5">
                        <span class="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            lunch_dining
                        </span>
                        <span class="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            sports_bar
                        </span>
                        <span class="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            liquor
                        </span>
                        <span class="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            restaurant
                        </span>
                        <span class="material-symbols-outlined me-2 h1 border rounded px-2 text-muted">
                            local_cafe
                        </span>
                    </div>
                </div>
                <div class="col-md-6 order-xs-first order-sm-first order-first">
                    <img src={dish_image_1} class="img-fluid hero-image" alt="Soupe dish right side" />
                </div>
            </section>
    </>
  )
}

export default Landingpage