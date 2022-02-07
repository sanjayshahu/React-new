import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from './firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './cart-icon';
import './header.scss';
import CartDropdown from './cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';
import { selectCartHidden } from '../redux/cart/cart.selector';
const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser?
        <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>:<Link className='option' to="/signinnup">Sign In </Link>
      }
      <CartIcon/>
    </div>
    {
     hidden?null:<CartDropdown />
      
    }
    
    
  </div>
);
// const mapStatetoProps=({user:{currentUser},cart:{hidden}})=>({
//   currentUser,
//   hidden
  
// })
const mapStatetoProps = createStructuredSelector({//used forpassing to multiple selector
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStatetoProps)(Header);