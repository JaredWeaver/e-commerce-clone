import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


const Checkout = ({ itemCount }) => {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="credit card ad"
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email || 'Guest'}</h3>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map(item => 
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
              )}
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal 
          itemCount={basket.length}
          total={getBasketTotal(basket)}
          />
      </div>
    </div>
  );
};

export default Checkout;
