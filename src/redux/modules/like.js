// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';

// MIDDLEWARE
const addLikeDB = (postId, post) => {
  return function (dispatch) {
    instance
      .post('/api/like', { postId })
      .then((res) => {
        const newPost = { ...post, reactionCount: post.reactionCount + 1, favorite: 'Y' };

        dispatch(postActions.updatePost(postId, newPost));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const removeLikeDB = (postId, post) => {
  return function (dispatch) {
    instance
      .delete('/api/like', { data: { postId } })
      .then((res) => {
        const newPost = { ...post, reactionCount: post.reactionCount - 1, favorite: 'N' };

        dispatch(postActions.updatePost(postId, newPost));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const likeActions = {
  addLikeDB,
  removeLikeDB,
};
