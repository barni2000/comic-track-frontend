import React from 'react';
import { Route, withRouter } from 'react-router';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ComicList from '../containers/ComicList';
import Login from '../containers/Login';

const Main = ({profile, logout}) => (
  <App centered={false}>
    <AppHeader profile={profile} onLogout={logout} />
    { profile.is_authenticated ?
      <Box align="center">
        <Route exact path="/" component={ComicList}/>
        <Route path="/test2" render={() => <div>Hello2</div>}/>
      </Box>
      :
      <Box align="center"><Login /></Box>
    }
    <AppFooter />
  </App>
);

export default withRouter(Main);
