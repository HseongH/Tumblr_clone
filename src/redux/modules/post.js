// AXIOS
import instance from '../../common/axios';

// REDUX
import { imgActions } from './image';

// ACTION
const GET_POST = 'GET_POST';
const GET_MORE_POST = 'GET_MORE_POST';
const POST_CREATE = 'POST_CREATE';
const POST_DETAIL = 'POST_DETAIL';
const POST_UPDATE = 'POST_UPDATE';
const POST_DELETE = 'POST_DELETE';

// ACTION CREATOR
const getPostList = (postList, start) => ({ type: GET_POST, postList, start });
const getMorePostList = (postList, start) => ({ type: GET_MORE_POST, postList, start });
const createPost = (post) => ({ type: POST_CREATE, post });
const getOnePost = (post) => ({ type: POST_DETAIL, post });
const updatePost = (postId, post) => ({ type: POST_UPDATE, postId, post });
const deletePost = (postId) => ({ type: POST_DELETE, postId });

// INITIAL STATE
const initialState = {
  list: [],
  post: null,
  start: 0,
};

// MIDDLEWARE
const getPostListDB = (limit = 6) => {
  return function (dispatch) {
    instance
      .get(`/api/post/posts?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getPostList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getPostList(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMorePostListDB = (limit = 6) => {
  return function (dispatch, getState) {
    const start = getState().post.start;

    if (start === null) return;

    instance
      .get(`/api/post/posts?start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMorePostList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getMorePostList(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getOnePostDB = (postId) => {
  return function (dispatch) {
    instance
      .get(`/detail/${postId}`)
      .then((res) => {
        console.log(res);
        dispatch(getOnePost(res.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const createPostDB = (image, post) => {
  return function (dispatch, getState) {
    dispatch(
      imgActions.uploadImageDB(image, () => {
        const imgUrl = getState().image.imageUrl;
        const postInfo = {
          ...post,
          img: imgUrl,
        };

        instance
          .post('/api/post', { ...postInfo })
          .then((res) => {
            dispatch(createPost({ img: imgUrl, postId: res.data.postId }));
          })
          .catch((error) => {
            console.error(error);
          });
      })
    );
  };
};

const updatePostDB = (postId, post, image) => {
  return function (dispatch, getState) {
    if (post.img) {
      const { title, artist, showDate, description, img } = post;

      instance
        .put(`/api/post/${postId}`, { title, artist, showDate, description, img })
        .then((res) => {
          const newPost = {
            img: post.img,
            postId,
          };

          dispatch(updatePost(postId, newPost));
        })
        .catch((error) => {
          console.error(error);
        });

      return;
    }

    dispatch(
      imgActions.uploadImageDB(image, () => {
        const imgUrl = getState().image.imageUrl;
        const postInfo = {
          ...post,
          img: imgUrl,
        };
        const { title, artist, showDate, description, img } = postInfo;

        instance
          .put(`/api/post/${postId}`, { title, artist, showDate, description, img })
          .then((res) => {
            const newPost = {
              img: postInfo.img,
              postId,
            };

            dispatch(updatePost(postId, newPost));
          })
          .catch((error) => {
            console.error(error);
          });
      })
    );
  };
};

const deletePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete('/api/post', { data: { postId } })
      .then((res) => {
        dispatch(deletePost(postId));
        history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
function post(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, list: action.postList, start: action.start };

    case GET_MORE_POST:
      return { ...state, list: [...state.list, ...action.postList], start: action.start };

    case POST_CREATE:
      const newPostList = [action.post, ...state.list];
      return { ...state, list: newPostList };

    case POST_DETAIL:
      return {
        ...state,
        post: action.post,
      };

    case POST_UPDATE:
      const updateList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return { ...action.post, favorite: post.favorite };
        }
        return post;
      });

      return { ...state, list: updateList };

    case POST_DELETE:
      const deleteList = state.list.filter((post) => post.postId !== action.postId);

      return { ...state, list: deleteList };

    default:
      return state;
  }
}

export default post;

export const postActions = {
  getPostList,
  createPost,
  getOnePost,
  updatePost,
  deletePost,
  getPostListDB,
  getMorePostListDB,
  getOnePostDB,
  createPostDB,
  updatePostDB,
  deletePostDB,
};
