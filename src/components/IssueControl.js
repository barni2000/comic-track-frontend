import React from 'react';

import AddIcon from 'grommet/components/icons/base/Add';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
import BookmarkIcon from 'grommet/components/icons/base/Bookmark';
import BookIcon from 'grommet/components/icons/base/Book';
import Anchor from 'grommet/components/Anchor';


const IssueControl = ({
  read,
  wished,
  onAddReadClick,
  onRemoveReadClick,
  onAddWishClick,
  onRemoveWishClick,
}) => (
  <span>
    { read ?
      <Anchor onClick={onRemoveReadClick} icon={<CheckmarkIcon />} /> : <Anchor onClick={onAddReadClick} icon={<AddIcon />} />
    }
    { wished ?
      <Anchor onClick={onRemoveWishClick} icon={<BookIcon />} /> : <Anchor onClick={onAddWishClick} icon={<BookmarkIcon/>} />
    }
  </span>
);

export default IssueControl;
