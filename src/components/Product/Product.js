import React from 'react'
import './Product.css'

const Product = ({ price, image, title, rating }) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />

            <button className="product__addToCartBtn">Add to Basket</button>
        </div>
    )
}

export default Product
