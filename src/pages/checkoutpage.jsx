import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../components/checkout-item';
import { selectCartItems } from '../redux/cart/cart.selector';
import { selectCartItemsCount } from '../redux/cart/cart.selector';


import './checkoutpage.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);
const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsCount
});


export default connect(mapStatetoProps)(CheckoutPage);