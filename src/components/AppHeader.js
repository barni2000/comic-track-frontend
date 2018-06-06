import React from 'react';
import { Link } from 'react-router-dom';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import SearchIcon from 'grommet/components/icons/base/Search';

const AppHeader = (props) => (
<Header justify="center" colorIndex="neutral-4">
  <Box size={{width: {max: 'xxlarge'}}} direction="row"
    responsive={false} justify="start" align="center"
    pad={{horizontal: 'medium'}} flex="grow">
    <Link to="/">
      <GrommetIcon colorIndex="brand" size="large"></GrommetIcon>
    </Link>
    <Box pad="small" />
    <Menu label="Label" inline={true} direction="row" flex="grow">
      <Anchor path={{path: "/", index: true}}>Home</Anchor>
      <Anchor path="/test2">Comics</Anchor>
    </Menu>

    <Box flex="grow" align="end">
      <SearchIcon />
    </Box>
  </Box>
</Header>
);

export default AppHeader
