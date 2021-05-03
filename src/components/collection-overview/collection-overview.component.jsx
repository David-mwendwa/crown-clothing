import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollectionsForOreview } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
