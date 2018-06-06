import React from 'react';

import AddIcon from 'grommet/components/icons/base/Add';
import BookmarkIcon from 'grommet/components/icons/base/Bookmark';
import Anchor from 'grommet/components/Anchor';


const IssueControl = () => (
  <span>
    <Anchor path="/test3" icon={<AddIcon />} />
    <Anchor path="/test3" icon={<BookmarkIcon />} />
  </span>
);

export default IssueControl;
