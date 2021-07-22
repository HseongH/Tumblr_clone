// AXIOS
import instance from '../../common/axios';

// redux-actions & immer
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// ACTION
const GET_MYPAGE_POST = 'GET_MYPAGE_POST';
const GET_MYPAGE_MORE_POST = 'GET_MYPAGE_MORE_POST';
const GET_MYPAGE_LIKE = 'GET_MYPAGE_LIKE';
const GET_MYPAGE_MORE_LIKE = 'GET_MYPAGE_MORE_LIKE';
const GET_MYPAGE_FOLLOWER = 'GET_MYPAGE_FOLLOWER';
const GET_MYPAGE_FOLLOWING = 'GET_MYPAGE_FOLLOWING';

// ACTION CREATOR
const getMyPagePost = createAction(GET_MYPAGE_POST, (list, start) => ({
  list,
  start,
}));
const getMoreMyPost = createAction(GET_MYPAGE_MORE_POST, (list, start) => ({
  list,
  start,
}));
const getMyPageLike = createAction(GET_MYPAGE_LIKE, (list, start) => ({
  list,
  start,
}));
const getMoreMyLike = createAction(GET_MYPAGE_MORE_LIKE, (list, start) => ({
  list,
  start,
}));
const getMyPageFollower = createAction(GET_MYPAGE_FOLLOWER, (list, start) => ({
  list,
  start,
}));
const getMyPageFollowing = createAction(GET_MYPAGE_FOLLOWING, (list, start) => ({
  list,
  start,
}));

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const getMyPostDB = (limit = 5) => {
  return function (dispatch) {
    instance
      .get(`/api/post/user?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPagePost(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPagePost(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMoreMyPostDB = (limit = 5) => {
  return function (dispatch, getState) {
    const start = getState().mypage.start;

    if (start === null) return;

    instance
      .get(`/api/post/user?start=${start}&limit${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMoreMyPost(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMoreMyPost(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMyLikeDB = (limit = 5) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/post/like?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPageLike(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPageLike(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMoreMyLikeDB = (limit = 5) => {
  return function (dispatch, getState) {
    const start = getState().mypage.start;

    if (start === null) return;

    instance
      .get(`/api/post/like?start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMoreMyLike(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMoreMyLike(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMyFollowerDB = (limit = 5) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/user/follower?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPageFollower(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPageFollower(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMyFollowingDB = (limit = 5) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/user/following?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPageFollowing(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPageFollowing(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// REDUCER
export default handleActions(
  {
    [GET_MYPAGE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.start = action.payload.start;
      }),

    [GET_MYPAGE_MORE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
        draft.start = action.payload.start;
      }),

    [GET_MYPAGE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.start = action.payload.start;
      }),

    [GET_MYPAGE_MORE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
        draft.start = action.payload.start;
      }),

    [GET_MYPAGE_FOLLOWER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.list);
        draft.list = action.payload.list;
        draft.start = action.payload.start;
      }),

    [GET_MYPAGE_FOLLOWING]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.start = action.payload.start;
      }),
  },
  initialState
);

const myPageActions = {
  getMyPagePost,
  getMyPageLike,
  getMyPageFollowing,
  getMyPageFollower,
  getMyPostDB,
  getMoreMyPostDB,
  getMyLikeDB,
  getMoreMyLikeDB,
  getMyFollowerDB,
  getMyFollowingDB,
};

export { myPageActions };
