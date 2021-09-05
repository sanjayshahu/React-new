import React from 'react';

import './homepage.styles.scss';
import Directory from '../components/directory';

const HomePage = (props) => {
  console.log(props);
  return (<div className='homepage'>
    <h1>Welcome to  Homepage</h1>      
    <Directory/>
 
  </div>)

}
  

export default HomePage;
