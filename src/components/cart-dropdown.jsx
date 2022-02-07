import React from 'react';

import CustomButton from './custom-button';
import { withRouter } from 'react-router';
import './cart-dropdown.scss';
import { connect } from 'react-redux';
import CartItem from './cart-item';
import { selectCartItems } from '../redux/cart/cart.selector';
import { toggleFlag } from '../redux/cart/cart.actions';
const CartDropdown = ({cartItems,history,dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items' >
    {
      cartItems.map(ele=><CartItem key={ele.id} item={ele}/>)
    }
     </div>
     <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleFlag());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStatetoProps=(state)=>({
  cartItems:selectCartItems(state)
  
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));//1.whenecer mapDispatchToProps
//not used thne dipatch can be directly used here dipacth used for passing actions look at props

//2.also if hoc used then first evaluated from inside like here component returned from connectis passed into
//withRouter now it can pass rountin gobjects to this compoent..