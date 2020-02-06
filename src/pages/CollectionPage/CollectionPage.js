import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/CollectionItem/CollectionItem'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './CollectionPage.scss'

const CollectionPage = ({ collection }) => console.log(collection) || (
  <div className='collection-page'>
    <h2>Collection Page</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)