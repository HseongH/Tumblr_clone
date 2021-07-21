import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// REDUX
import { likeActions } from '../redux/modules/like';

// ELEMENTS
import { Button } from '../elements/index';

// ICON
import FavoriteIcon from '@material-ui/icons/Favorite';

const Like = ({ isFavorite, post }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(isFavorite);

  const addLike = () => {
    dispatch(likeActions.addLikeDB(post.postId, post));
  };

  const removeLike = () => {
    dispatch(likeActions.removeLikeDB(post.postId, post));
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
