import React from 'react'

import dish_image_1 from "../assets/dishes/dish_1.png";
import dish_image_2 from "../assets/dishes/dish_7.png";

const Subsection2 = () => {
  return (
    <>
     <section className="row mt-5 third-section">
                <div className="col-md-6 mt-5">
                    <h1 className="h1">It takes only 25 minutes to deliver your food order</h1>
                    <p className="mt-4">Delicious Food is Waiting For you - It takes only 25 minutes to deliver your food
                        order.
                        Order now and satisfy your cravings in no time with our swift delivery service.</p>
                </div>
                <div className="col-md-6">
                    <img src={dish_image_1} className="img-fluid" alt="One food item" />
                </div>
            </section>

            <section className="row mt-5 fourth-section">
                <div className="col-md-6 order-lg-first order-last">
                    <img src={dish_image_2} className="img-fluid ps-5" alt="Second food item" />
                </div>
                <div className="col-md-6 mt-5 ps-5 order-lg-last">
                    <h1 className="h1">Tasty dishes, swift delivery, compassionate care.</h1>
                    <p className="mt-4">Indulge in our delectable dishes, freshly prepared and bursting with flavor.
                        Experience
                        the convenience of swift delivery, bringing gourmet meals straight to your door.</p>
                </div>
            </section>
    </>
  )
}

export default Subsection2