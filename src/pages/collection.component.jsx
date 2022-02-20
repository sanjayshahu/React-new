import React from 'react';
import { connect } from 'react-redux';

import PreviewCollectionItem from '../components/previewcollectionitem';

import { selectCollection } from '../redux/shop/shop.selectors';

import './collection.component.scss';

const CollectionPage = ({ collection }) => {
  console.log("c",collection);
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <PreviewCollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) //here fetched dynamic route 
  //is send to get  respective collection..
});

export default connect(mapStateToProps)(CollectionPage);