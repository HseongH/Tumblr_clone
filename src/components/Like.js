import React, { useState } from 'react';

// REDUX
import { likeActions } from '../redux/modules/like';

// ELEMENTS
import { Button } from '../elements/index';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';

const Like = ({ isFavorite, postId }) => {
  const [active, setActive] = useState(isFavorite);

  const addLike = () => {
    likeActions.addLikeDB(postId);
  };

  const removeLike = () => {
    likeActions.removeLikeDB(postId);
  };

  return (
    <Button
      color={active ? 'red' : 'black'}
      clickEvent={() => {
        setActive((state) => !state);
        active ? removeLike() : addLike();
      }}
    >
      <FavoriteIcon />
    </Button>
  );
};

export default Like;
