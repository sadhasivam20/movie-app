import { useState } from 'react';
import React from 'react';
import { getQueriesForElement } from '@testing-library/react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';

export function Counter() {
  let [like, setLike] = useState(0);
  let [disLike, setDislike] = useState(0);

  return (
    <div>
 <IconButton  onClick={() => setLike(like + 1)} aria-label="like" color="primary">
<Badge badgeContent={like} color="primary">
 👍
</Badge>
</IconButton>

<IconButton  onClick={() => setDislike(disLike + 1)} aria-label="dislike" color="error">
<Badge badgeContent={disLike} color="error">
👎
</Badge>
</IconButton>

    
    </div>
  );
}
