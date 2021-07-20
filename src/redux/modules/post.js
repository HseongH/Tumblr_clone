// MOMENT
import moment from 'moment';

// AXIOS
import instance from '../../common/axios';

// REDUX
import { imgActions } from './image';

// ACTION
const GET_POST = 'GET_POST';
const GET_MORE_POST = 'GET_MORE_POST';
const POST_CREATE = 'POST_CREATE';
const POST_UPDATE = 'POST_UPDATE';
const POST_DELETE = 'POST_DELETE';

// ACTION CREATOR
const getPostList = (postList, start) => ({ type: GET_POST, postList, start });
const getMorePostList = (postList, start) => ({ type: GET_MORE_POST, postList, start });
const createPost = (post) => ({ type: POST_CREATE, post });
const updatePost = (postId, post) => ({ type: POST_UPDATE, postId, post });
const deletePost = (postId) => ({ type: POST_DELETE, postId });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const getPostListDB = (limit = 10) => {
  return function (dispatch) {
    instance
      .get(`/api/post/posts?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getPostList(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getPostList(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMorePostListDB = (limit = 10) => {
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

        res.data.result.pop();
        dispatch(getMorePostList(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const createPostDB = (post) => {
  return function (dispatch, getState) {
    const imgFile = getState().image.file;

    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imgUrl = getState().image.imageUrl;
          const postInfo = {
            ...post,
            img: imgUrl,
          };

          instance
            .post('/api/post', { ...postInfo })
            .then((res) => {
              const userInfo = getState().user;
              const newPost = {
                ...postInfo,
                postId: res.data.postId,
                nickname: userInfo.nickname,
                profileImg: userInfo.profileImg,
                reactionCount: 0,
                favorite: false,
                follow: false,
                createAt: moment().utc(new Date()).format('YY년 M월 D일, H시 M분'),
              };

              dispatch(createPost(newPost));
            })
            .catch((error) => {
              console.error(error);
            });
        })
      );

      return;
    }

    const postInfo = {
      ...post,
      img: [],
    };

    instance
      .post('/api/post', { ...postInfo })
      .then((res) => {
        dispatch(createPost({ post, postId: res.data.postId }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const updatePostDB = (postId, post) => {
  return function (dispatch, getState) {
    const imgFile = getState().image.file;

    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imgUrl = getState().image.imageUrl;
          const postInfo = {
            ...post,
            img: imgUrl,
          };
          const { title, reBlog, tag, content, img } = postInfo;

          instance
            .put('/api/post', { postId, title, reBlog, tag, content, img })
            .then((res) => {
              dispatch(updatePost(postId, postInfo));
            })
            .catch((error) => {
              console.error(error);
            });
        })
      );
    }

    const { title, reBlog, tag, content, img } = post;

    instance
      .put('/api/post', { postId, title, reBlog, tag, content, img })
      .then((res) => {
        dispatch(updatePost(postId, post));
      })
      .catch((error) => {
        console.error(error);
      });

    return;
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
export default function post(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return { ...state, list: action.postList, start: action.start };

    case GET_MORE_POST:
      return { ...state, list: [...state.list, ...action.postList], start: action.start };

    case POST_CREATE:
      const newPostList = [action.post, ...state.list];
      return { ...state, list: newPostList };

    case POST_UPDATE:
      const updateList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return action.post;
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

export const postActions = {
  getPostList,
  createPost,
  updatePost,
  deletePost,
  getPostListDB,
  getMorePostListDB,
  createPostDB,
  updatePostDB,
  deletePostDB,
};
