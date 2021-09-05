import React from 'react';
import './menu-items.scss';
import { withRouter } from 'react-router';
const MenuItems =({title,imageUrl,size,linkUrl,history,match})=>{
 return  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url} ${linkUrl}`)}>
 
 <div style={{
 backgroundImage: `url(${imageUrl})`
 }}
 className='background-image'>
  </div>
 

  <div className='content'>
    <div className='title'>{title.toUpperCase()}</div>
    <span className='subtitle'>SHOP NOW</span>
  </div>

 </div>
 
}
export default withRouter(MenuItems)

