// AXIOS
import instance from "../../common/axios";

// redux-actions & immer
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// ACTION
const GET_MYPAGE_POST = "GET_MYPAGE_POST";
const GET_MYPAGE_MORE_POST = "GET_MYPAGE_MORE_POST";
const GET_MYPAGE_LIKE = "GET_MYPAGE_LIKE";
const GET_MYPAGE_MORE_LIKE = "GET_MYPAGE_MORE_LIKE";
const GET_MYPAGE_FOLLOWER = "GET_MYPAGE_FOLLOWER";
const GET_MYPAGE_FOLLOWING = "GET_MYPAGE_FOLLOWING";

// ACTION CREATOR
const getMyPagePost = createAction(GET_MYPAGE_POST, (list, start) => ({
  list,
  start,
}));
const getMyPageMorePost = createAction(GET_MYPAGE_MORE_POST, (list, start) => ({
  list,
  start,
}));
const getMyPageLike = createAction(GET_MYPAGE_LIKE, (likeList, start) => ({
  likeList,
  start,
}));
const getMyPageMoreLike = createAction(
  GET_MYPAGE_MORE_LIKE,
  (likeList, start) => ({ likeList, start })
);
const getMyPageFollower = createAction(
  GET_MYPAGE_FOLLOWER,
  (followerList, start) => ({ followerList, start })
);
const getMyPageFollowing = createAction(
  GET_MYPAGE_FOLLOWING,
  (followingList, start) => ({ followingList, start })
);

// INITIAL STATE
const initialState = {
  list: [],
  likeList: [],
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
        dispatch(getMyPagePost(res.data.result, null));
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
        console.log(res)
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPageLike(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPageLike(res.data.result, null));
      })
      .catch((error) => {
        console.log(error);
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

    [GET_MYPAGE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.likeList = action.payload.likeList;
        draft.start = action.payload.start;
      }),
  },
  initialState
);

const myPageActions = {
  getMyPostDB,
  getMyLikeDB,
};

export { myPageActions };
