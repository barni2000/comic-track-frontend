import React from 'react';
import { Route, withRouter } from 'react-router';
import App from 'grommet/components/App';
import Section from 'grommet/components/Section';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import ComicList from '../containers/ComicList';

const Main = () => (
  <App centered={false}>
    <AppHeader />
    <Section pad="large" >
      <Route exact path="/" component={ComicList}/>
      <Route path="/test2" render={() => <div>Hello2</div>}/>
    </Section>
    <AppFooter />
  </App>
);

export default withRouter(Main);
