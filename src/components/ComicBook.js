import React from 'react';
import _ from 'underscore';

import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import IssueControl from './IssueControl';

const ComicBook = ({ data, addRead, removeRead, addWish, removeWish }) => (
  <Card
    thumbnail={
      <Box colorIndex="neutral-4">
        <Anchor path="/test2"><Image src={data.cover} /></Anchor>
        <IssueControl
          read={_.contains(data.profile.read, data.url)}
          wished={_.contains(data.profile.wishlist, data.url)}
          // TODO: Move this logic away
          onAddReadClick={() => addRead(data.profile.url, {read: [...data.profile.read,  data.url]})}
          onRemoveReadClick={() => removeRead(data.profile.url, {read: _.without(data.profile.read,  data.url)})}
          onAddWishClick={() => addWish(data.profile.url, {wishlist: [...data.profile.wishlist,  data.url]})}
          onRemoveWishClick={() => removeWish(data.profile.url, {wishlist: _.without(data.profile.read,  data.url)})}

        />
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
