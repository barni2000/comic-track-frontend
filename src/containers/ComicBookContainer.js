import React from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

import { addRead, removeRead, addWish, removeWish } from '../actions'
import { ComicBook } from '../components'

const ComicBookContainer = props => (
  <ComicBook {...props} />
)

const mapDispatchToProps = dispatch => ({
  addRead:
    (profile, url) => dispatch(addRead(profile.url, {read: [...profile.read,  url]})),
  removeRead:
    (profile, url) => dispatch(removeRead(profile.url, {read: _.without(profile.read,  url)})),
  addWish:
    (profile, url) => dispatch(addWish(profile.url, {wishlist: [...profile.wishlist,  url]})),
  removeWish:
    (profile, url) => dispatch(removeWish(profile.url, {wishlist: _.without(profile.wishlist,  url)})),
})

export default connect(null, mapDispatchToProps)(ComicBookContainer)
