import React from 'react'
import './Product.css';
function Product(props) {
  const stars = Array.from({ length: props.rating }, (_, index) => (
    <span key={index}>⭐</span>
  ));

  return (
    <div className='product'>
        <div className="product_info">
          <p>{props.text}</p>
          <p><b><small>₹</small>
          {props.price}</b></p>
            <div className="product_rating">
              {stars}
            </div>
          </div>
       <img src={props.image} alt={props.alt} />
        <button className='button-32'>Add to Basket</button>
        </div>

  );
}

export default Product
