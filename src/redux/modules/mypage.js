// AXIOS
import instance from '../../common/axios';

// redux-actions & immer
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// ACTION
const GET_MYPAGE_POST = 'GET_MYPAGE_POST';

// ACTION CREATOR
const getMyPagePost = createAction(GET_MYPAGE_POST, (list, start) => ({ list, start }));

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
};

// MIDDLEWARE
const getLikeDB = (limit = 5) => {
  return function (dispatch) {
    instance
      .get(`/api/post/like?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMyPagePost(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMyPagePost(res.data.result, limit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

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

// REDUCER
export default handleActions(
  {
    [GET_MYPAGE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
        draft.start = action.payload.start;
      }),
  },
  initialState
);

const myPageActions = {
  getLikeDB,
  getMyPostDB,
};

export { myPageActions };
