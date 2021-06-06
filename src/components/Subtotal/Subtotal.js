import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';



const Subtotal = ({itemCount, total}) => {


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(total) => (
          <>
            <p>
              Subtotal ({itemCount} items): <strong>{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
<button>Proceed to Checkout</button>          
    </div>
  );
};

export default Subtotal;
