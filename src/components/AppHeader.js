import React from 'react';
import { Link } from 'react-router-dom';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Search from 'grommet/components/Search';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';

const AppHeader = ({profile, onLogout}) => (
<Header justify="center" colorIndex="neutral-4">
  <Box size={{width: {max: 'xxlarge'}}} direction="row"
    responsive={false} justify="start" align="center"
    pad={{horizontal: 'medium'}} flex="grow">
    <Link to="/">
      <GrommetIcon colorIndex="brand" size="large"></GrommetIcon>
    </Link>
    <Box pad="small" />
    { profile.is_authenticated &&
    <Menu label="Label" inline={true} direction="row" flex="grow">
      <Anchor path={{path: "/", index: true}}>Home</Anchor>
      <Anchor path="/test2">Comics</Anchor>
    </Menu>
    }

  </Box>
  <Box align="end">
    <span>
      { profile.fetching === false && profile.is_authenticated &&
        <Button path="/profile" primary={true} label={profile.data.username} />
      }
      { profile.is_authenticated &&
        <Button label="Logout" secondary={true} onClick={onLogout} />
      }
    </span>
  </Box>
</Header>
);

export default AppHeader
