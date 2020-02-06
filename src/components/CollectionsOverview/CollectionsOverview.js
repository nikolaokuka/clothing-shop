import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

import { selectCollections } from '../../redux/shop/shop.selectors'

import './CollectionsOverview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)