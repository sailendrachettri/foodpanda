import React, { useState } from 'react';
import dish_image_1 from '../assets/menu/menu_dish_1.png';
import dish_image_2 from '../assets/menu/menu_dish_2.png';
import dish_image_3 from '../assets/menu/menu_dish_3.png';
import dish_image_4 from '../assets/menu/menu_dish_4.png';
import dish_image_5 from '../assets/menu/menu_dish_5.png';
import {toast} from 'react-toastify';
import PageLoading from '../utils/PageLoading';

// Define an array of objects containing product details
const products = [
  {
    id: '001',
    name: "Chicken Masala",
    description: "Creamy Chicken",
    price: "$14.99",
    image: dish_image_5
  },
  {
    id: '002',
    name: "Margherita Pizza",
    description: "Classic Italian Pizza",
    price: "$12.50",
    image: dish_image_2
  },
  {
    id: '003',
    name: "Sushi Platter",
    description: "Fresh Assorted Sushi",
    price: "$24.99",
    image: dish_image_3
  },
  {
    id: '004',
    name: "Beef Burger",
    description: "Juicy Cheeseburger",
    price: "$10.99",
    image: dish_image_4
  },
  {
    id: '005',
    name: "Margherita Pizza",
    description: "Classic Italian Pizza",
    price: "$12.50",
    image: dish_image_5
  },
  {
    id: '006',
    name: "Pasta Carbonara",
    description: "Creamy Bacon Pasta",
    price: "$15.99",
    image: dish_image_4
  },
  {
    id: '007',
    name: "Shrimp Tacos",
    description: "Grilled Shrimp Tacos",
    price: "$18.50",
    image: dish_image_3
  },
  {
    id: '008',
    name: "Vegetable Stir Fry",
    description: "Savory Veg Stir-Fry",
    price: "$11.99",
    image: dish_image_2
  },
  {
    id: '009',
    name: "Mango Chicken",
    description: "Tangy Mango Chicken",
    price: "$16.99",
    image: dish_image_1
  },
  {
    id: '010',
    name: "Cheese Platter",
    description: "Artisan Cheese Board",
    price: "$22.99",
    image: dish_image_5
  },
  {
    id: '011',
    name: "Margherita Pizza",
    description: "Classic Italian Pizza",
    price: "$12.50",
    image: dish_image_2
  },
  {
    id: '012',
    name: "Chocolate Fondue",
    description: "Rich Chocolate Dip",
    price: "$9.99",
    image: dish_image_1
  }
];

const Menu = () => {
  // HOOKS
  const [pageLoading, setPageLoading] = useState(true);

  // METHODS
  function handleAddToCard(itemId){
    toast.success(`Item added to card id ${itemId}`)
  }

  setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  if (pageLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{minHeight: '50vh'}}>
        <PageLoading />
      </div>
    );
  }

  return (
    <>
      <main className="container my-5" id="productContainer">
        <h1 className="text-center mb-4 display-3">Explore the menu items</h1>
        <section className="row" id="menuItems">
          {products.map((product) => (
            <div className="col-md-4 col-sm-6 col-lg-6 col-xl-3 mb-4" key={product.id}>
              <div className="item-cards text-center shadow p-3 bg-body rounded">
                <img src={product.image} className="img-fluid" alt={product.name} />
                <div className="d-flex flex-column">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <div className="d-flex justify-content-evenly">
                    <span className="material-symbols-outlined" id={`cart-${product.id}`} onClick={()=> handleAddToCard(product.id)}>shopping_cart</span>
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Menu;