import React from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'

import { addRead, removeRead, addWish, removeWish } from '../actions'
import IssueControl from '../components/IssueControl'

const IssueControlContainer = ({
  profile,
  onAddRead,
  onRemoveRead,
  onAddWish,
  onRemoveWish,
  issues,
}) => (profile.fetching === false ?
  <IssueControl
    read={_.difference(issues, profile.data.read).length}
    wished={_.difference(issues, profile.data.wishlist).length}
    onAddReadClick={() => onAddRead(profile.data, issues)}
    onRemoveReadClick={() => onRemoveRead(profile.data, issues)}
    onAddWishClick={() => onAddWish(profile.data, issues)}
    onRemoveWishClick={() => onRemoveWish(profile.data, issues)}
  /> : ''
)

const mapStateToProps = state => ({
  profile: state.profile,
})

const mapDispatchToProps = dispatch => ({
  onAddRead:
    (profile, issues) => dispatch(addRead(profile.url, { read: [...profile.read, ...issues] })),
  onRemoveRead:
    (profile, issues) => dispatch(removeRead(profile.url, { read: _.difference(profile.read, issues) })),
  onAddWish:
    (profile, issues) => dispatch(addWish(profile.url, { wishlist: [...profile.wishlist, ...issues] })),
  onRemoveWish:
    (profile, issues) => dispatch(removeWish(profile.url, { wishlist: _.difference(profile.wishlist, issues) })),
})

export default connect(mapStateToProps, mapDispatchToProps)(IssueControlContainer)
