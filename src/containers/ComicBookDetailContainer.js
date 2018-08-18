import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchIssues } from '../actions'
import ComicBookDetail from '../components/ComicBookDetail'

class ComicBookDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchIssues()
  }

  render() {
    const { comics, issues, match: { params } } = this.props
    if (comics.fetching === false && issues.fetching === false) {
      const comicbook = comics.data[params.id]
      return <ComicBookDetail comicbook={comicbook} />
    }

    return ''
  }
}

const mapStateToProps = state => ({
  comics: state.comics,
  issues: state.issues,
})

const mapDispatchToProps = dispatch => ({
  fetchIssues: () => dispatch(fetchIssues()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ComicBookDetailContainer)
