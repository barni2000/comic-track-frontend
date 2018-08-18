import React from 'react'
import { Route } from 'react-router'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import AppHeaderContainer from '../containers/AppHeaderContainer'
import ComicBookDetailContainer from '../containers/ComicBookDetailContainer'
import AppFooter from './AppFooter'
import ComicList from '../containers/ComicList'
import Login from '../containers/Login'

const Main = ({ profile }) => (
  <App centered={false}>
    <AppHeaderContainer />
    { profile.is_authenticated ?
      <Box align='center'>
        <Route exact path='/' component={ComicList} />
        <Route path='/comics/:id' component={ComicBookDetailContainer} />
      </Box>
      :
      <Box align='center'><Login /></Box>
    }
    <AppFooter />
  </App>
)

export default Main
