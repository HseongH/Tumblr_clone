// AXIOS
import instance from '../../common/axios';

const addLikeDB = (postId) => {
  instance.post('/api/like', { postId }).catch((error) => {
    console.error(error);
  });
};

const removeLikeDB = (postId) => {
  instance.delete('/api/like', { data: { postId } }).catch((error) => {
    console.error(error);
  });
};

export const likeActions = {
  addLikeDB,
  removeLikeDB,
};
