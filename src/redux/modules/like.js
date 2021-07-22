// AXIOS
import instance from '../../common/axios';

// REDUX
import { postActions } from './post';
import { myPageActions } from './mypage';

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
  return function (dispatch, getState) {
    const myPageData = getState().mypage;

    const likePosts = myPageData.list;
    const start = myPageData.start;

    instance
      .delete('/api/like', { data: { postId } })
      .then((res) => {
        const newPost = { ...post, reactionCount: post.reactionCount - 1, favorite: 'N' };

        const likePostList = likePosts.filter((likePost) => likePost.postId !== postId);

        dispatch(postActions.updatePost(postId, newPost));
        dispatch(myPageActions.getMyPageLike(likePostList, start));
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
