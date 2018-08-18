import React from 'react'

import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Image from 'grommet/components/Image'

import IssueControlContainer from '../containers/IssueControlContainer'

const ComicBook = ({ id, data }) => (
  <Card
    thumbnail={
      <Box colorIndex='neutral-4'>
        <Anchor path={`/comics/${id}`}><Image src={data.cover} /></Anchor>
        <IssueControlContainer issues={data.issues} />
      </Box>
    }
    label={data.publisher.name}
    heading={data.title}
    headingStrong={false}
    link={<Anchor path={`/comics/${id}`} label='See More' />}
    contentPad='small'
  />
)

export default ComicBook
