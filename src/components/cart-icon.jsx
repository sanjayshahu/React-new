import React from 'react';
import { connect } from 'react-redux';



import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { toggleFlag } from '../redux/cart/cart.actions';//use actions for dispatching actions use with mapDispatchtoprops
import { selectCartItemsCount } from '../redux/cart/cart.selector';//use selectors for getting value use with mapstatetoprops
import { createStructuredSelector } from 'reselect';

import './cart-icon.scss';

const CartIcon = ({toggleFlag,totalCount }) => (
  <div className='cart-icon' onClick={toggleFlag} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{totalCount}</span>
  </div>
);
// const mapStatetoProps=({cart:{cartItems}})=>({
//   //using this approcah has problem becuase by default cart is coming from universal state object which always gets 
//   //modified becuse due to any of the actionf from any of the reducer new state object is sent that when extracted here is new state object
//   //thus rerendering happens even though no state related to this compoent changes
//   totalCount:cartItems.reduce((acc,cv)=>acc+cv.quantity,0)
  
// })
// const mapStatetoProps=(state)=>({
//   totalCount:selectCartItemsCount(state)
//   // using this approach we get memoized result here whole state is passed but only cart related state is obtained

// })

const mapStatetoProps=createStructuredSelector({
   totalCount:selectCartItemsCount
   //using createStructuedSelector syntax can be made musch easier no need to pass state as argument
})

const mapDispatchToProps=(dispatch)=>({
toggleFlag:()=>dispatch(toggleFlag()) //obtainde method fom actions are passed as props
})


export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);