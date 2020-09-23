import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className="product">
            <p>{props.title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(props.rating).fill().map((_) => (
                        <p>⭐️</p>
                    ))
                }
            </div>
                <img src={props.image} alt="" />
                <button>Add to basket</button>

        </div>
    )
}

export default Product;
