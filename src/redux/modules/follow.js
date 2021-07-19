// AXIOS
import instance from '../../common/axios';

const addFollowDB = (userId) => {
  instance.post('/api/follow', { userId }).catch((error) => {
    console.error(error);
  });
};

const removeFollowDB = (userId) => {
  instance.delete('/api/follow', { data: { userId } }).catch((error) => {
    console.error(error);
  });
};

export const likeActions = {
  addFollowDB,
  removeFollowDB,
};
