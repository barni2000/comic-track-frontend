import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import _ from 'underscore';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Spinning from 'grommet/components/icons/Spinning';

import {
  fetchComics,
  fetchPublishers,
  fetchProfile,
} from '../actions';

import ComicBookContainer from './ComicBookContainer'

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
    } = this.props;
    return comics.data.map(item => {
      const publisher = _.findWhere(publishers.data, {url: item.publisher});
      return (
        <Tile key={Math.random()}>
          <ComicBookContainer
            data={{...item, publisher, profile: profile.data}}
          />
        </Tile>
      );
    });
  }

  render () {
    const { comics, publishers, profile } = this.props;

    if(comics.fetching === false && publishers.fetching === false && profile.fetching === false) {
      return <Tiles flush={false}>{this.renderTiles()}</Tiles>;
    }

    return <Spinning size="huge" />;
  }

}

const mapDispatchToProps = dispatch => ({
  fetchComics: () => { dispatch(fetchComics()); },
  fetchPublishers: () => { dispatch(fetchPublishers()); },
  fetchProfile: () => { dispatch(fetchProfile()); },
});

const mapStateToProps = state => ({
  comics: state.comics,
  publishers: state.publishers,
  profile: state.profile,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicList));
