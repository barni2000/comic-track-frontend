import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Spinning from 'grommet/components/icons/Spinning';
import _ from 'underscore';

import { ComicBook } from '../components';
import {
  fetchComics,
  fetchPublishers,
  fetchProfile,
  addRead,
  removeRead,
  addWish,
  removeWish,
} from '../actions';

class ComicList extends Component {
  componentDidMount() {
    this.props.fetchComics();
    this.props.fetchPublishers();
    this.props.fetchProfile();
  }

  renderTiles() {
    const {
      comics,
      publishers,
      profile,
      addRead,
      removeRead,
      addWish,
      removeWish,
    } = this.props;
    return comics.data.map(item => {
      const publisher = _.findWhere(publishers.data, {url: item.publisher});
      return (
        <Tile key={Math.random()}>
          <ComicBook
            data={{...item, publisher, profile: profile.data}}
            addRead={addRead}
            removeRead={removeRead}
            addWish={addWish}
            removeWish={removeWish}
          />
        </Tile>
      );
    });
  }

  render () {
    const { comics, publishers, profile } = this.props;

    if(comics.fetching === false && publishers.fetching === false && profile.is_authenticated) {
      return <Tiles flush={false}>{this.renderTiles()}</Tiles>;
    }

    return <Spinning size="huge" />;
  }

}

const mapDispatchToProps = dispatch => ({
  fetchComics: () => { dispatch(fetchComics()); },
  fetchPublishers: () => { dispatch(fetchPublishers()); },
  fetchProfile: () => { dispatch(fetchProfile()); },
  addRead: (url, data) => { dispatch(addRead(url, data)); },
  addWish: (url, data) => { dispatch(addWish(url, data)); },
  removeRead: (url, data) => { dispatch(removeRead(url, data)); },
  removeWish: (url, data) => { dispatch(removeWish(url, data)); },
});

const mapStateToProps = state => ({
  comics: state.comics,
  publishers: state.publishers,
  profile: state.profile,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicList));
