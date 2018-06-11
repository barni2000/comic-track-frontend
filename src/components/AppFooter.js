import React from 'react';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';

const AppFooter = () => (
  <Footer justify='between'>
    <Title>
    <s />
     Comic Track
    </Title>
    <Box direction='row'
      align='center'
      pad={{"between": "medium"}}>
      <Paragraph margin='none'>
        Copyright <a href="https://github.com/barni2000">barni2000</a>
      </Paragraph>
      <Menu direction='row'
        size='small'
        dropAlign={{"right": "right"}}>
        <Anchor href='#'>
          Support
        </Anchor>
        <Anchor href='#'>
          Contact
        </Anchor>
        <Anchor href='#'>
          About
        </Anchor>
      </Menu>
    </Box>
  </Footer>
);

export default AppFooter;
