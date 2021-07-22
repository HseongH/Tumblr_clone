// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';

const addFollowDB = (userId) => {
  return function (dispatch, getState) {
    const post = getState().post;

    const postList = post.list;
    const start = post.start;

    instance
      .post('/api/follow', { userId })
      .then((res) => {
        const newPostList = postList.map((post) => {
          if (post.userId === userId) {
            return {
              ...post,
              follow: 'Y',
            };
          }

          return post;
        });

        dispatch(postActions.getPostList(newPostList, start));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const removeFollowDB = (userId) => {
  return function (dispatch, getState) {
    const post = getState().post;

    const postList = post.list;
    const start = post.start;

    instance
      .delete('/api/follow', { data: { userId } })
      .then((res) => {
        const newPostList = postList.map((post) => {
          if (post.userId === userId) {
            return {
              ...post,
              follow: 'N',
            };
          }

          return post;
        });

        dispatch(postActions.getPostList(newPostList, start));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const followActions = {
  addFollowDB,
  removeFollowDB,
};
