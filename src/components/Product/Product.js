import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Product.css'

const Product = ({ id, price, image, title, rating }) => {

    const [{ basket }, dispatch] =useStateValue();

console.log('basket', basket)

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            }
        })
    }

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

            <button onClick={addToBasket} className="product__addToCartBtn">Add to Basket</button>
        </div>
    )
}

export default Product
