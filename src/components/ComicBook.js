import React from 'react';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import IssueControl from './IssueControl';

const ComicBook = ({ data }) => (
  <Card
    thumbnail={
      <Box colorIndex="neutral-4">
        <Anchor path="/test2"><Image src={data.cover} /></Anchor>
        <IssueControl />
      </Box>
    }
    label={data.publisher.name}
    heading={data.title}
    headingStrong={false}
    link={<Anchor path='/test2' label='See More' />}
    contentPad='small'
  />
);

export default ComicBook;
