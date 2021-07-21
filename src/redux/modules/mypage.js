// AXIOS
import instance from "../../common/axios";
import MyPage from "../../pages/MyPage";

// ACTION
const GET_LIKE_POST = "GET_LIKE_POST";

// ACTION CREATOR
const getLikePost = (likeList, start) => ({
  type: GET_LIKE_POST,
  likeList,
  start,
});

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
          dispatch(getLikePost(res.data.result.null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getLikePost(res.data.result, limit));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// REDUCER
function like(state = initialState, action) {
  switch (action.type) {
    case GET_LIKE_POST:
      return { list: action.likeList, start: action.start };

    default:
      return state;
  }
}

export const likeActions = {
  getLikeDB,
  getLikePost,
};

export default { likeActions };