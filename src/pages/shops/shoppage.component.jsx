import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection.overview.component';
import CollectionPage from '../collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
//match.path gives route to shop so main route leads to collection ooverview

//match.path.:collectionId makes collectionId as variable which leads to collectionPage
export default ShopPage;