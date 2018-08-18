import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'underscore'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Spinning from 'grommet/components/icons/Spinning'

import {
  fetchComics,
  fetchPublishers,
} from '../actions'

import ComicBook from '../components/ComicBook'

class ComicList extends Component {
  componentDidMount() {
    this.props.fetchComics()
    this.props.fetchPublishers()
  }

  renderTiles() {
    const {
      comics,
      publishers,
    } = this.props
    return comics.data.map((item, id) => {
      const publisher = _.findWhere(publishers.data, { url: item.publisher })
      return (
        <Tile key={Math.random()}>
          <ComicBook id={id} data={{ ...item, publisher }} />
        </Tile>
      )
    })
  }

  render() {
    const { comics, publishers } = this.props

    if (comics.fetching === false && publishers.fetching === false) {
      return <Tiles flush={false}>{this.renderTiles()}</Tiles>
    }

    return <Spinning size='huge' />
  }
}

const mapDispatchToProps = dispatch => ({
  fetchComics: () => { dispatch(fetchComics()) },
  fetchPublishers: () => { dispatch(fetchPublishers()) },
})

const mapStateToProps = state => ({
  comics: state.comics,
  publishers: state.publishers,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicList))
