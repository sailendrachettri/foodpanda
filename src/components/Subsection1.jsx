import React from 'react'

import dish_image_1 from "../assets/dishes/dish_8.png";
import dish_image_2 from "../assets/dishes/dish_12.png";

const Subsection1 = () => {
    return (
        <>
            <section className="row second-section pt-5">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="item-cards text-center shadow p-3 bg-body rounded">
                                <img src={dish_image_1} className="img-fluid" alt="Food items" />
                                    <div className="d-flex flex-column">
                                        <h4>Burger Spicy </h4>
                                        <p>Spicy with Veggies</p>
                                        <p>$925.89</p>
                                        <div className="d-flex justify-content-evenly">
                                            <span className="material-symbols-outlined">
                                                shopping_cart
                                            </span>
                                            <span className="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="item-cards text-center shadow p-3 bg-body rounded">
                                <img src={dish_image_2} className="img-fluid" alt="Food items" />
                                    <div className="d-flex flex-column">
                                        <h4>California-style Pizza</h4>
                                        <p>Non Spicy with Toppings</p>
                                        <p>$12.50</p>
                                        <div className="d-flex justify-content-evenly">
                                            <span className="material-symbols-outlined">
                                                shopping_cart
                                            </span>
                                            <span className="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 text-start ms-xl-5">
                    <h2>We have Delicious Food</h2>
                    <h2>Teasty Food in Town</h2>
                    <p className="mt-4">In our town, culinary wonders abound, promising flavor-filled adventures at every
                        turn.
                        From quaint cafes to lively eateries, the air is alive with the scent of delectable creations.
                        With
                        "Delicious Food" and "Tasty Food" as our creed, every bite is a delightful journey of taste.</p>
                </div>
            </section>
        </>
    )
}

export default Subsection1