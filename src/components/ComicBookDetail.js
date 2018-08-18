import React from 'react'

const ComicBookDetail = ({ comicbook }) => (
  <div>
    { comicbook.title }
    { comicbook.issues }
  </div>
)

export default ComicBookDetail
