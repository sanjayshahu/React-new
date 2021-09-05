import React from 'react';
import SHOP_DATA from './shops.data';
import PreviewCollection from '../../components/previewcollection';
class ShopPage extends React.Component{
    constructor(){
        super()

        this.state={
          collections:SHOP_DATA
        }
    }

    render(){
        return (
            <div>
                <h1>Collections</h1>
                {
                  this.state.collections.map(({id,...otherprops})=>{
                      return (
                          <PreviewCollection key={id} {...otherprops}/>
                      )

                  }
                      

                  )
                }
            </div>
        )

        
    }
}
export default ShopPage;