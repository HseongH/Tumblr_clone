// AXIOS
import instance from '../../common/axios';

// ACTION
const SEARCH_POST = 'SEARCH_POST';
const GET_MORE_SEARCH_RESULT = 'GET_MORE_SEARCH_RESULT';
const UPDATE_SEARCH_POST = 'UPDATE_SEARCH_POST';
const DEL_SEARCH_POST = 'DEL_SEARCH_POST';

// ACTION CREATOR
const searchPost = (list, start, keyword) => ({ type: SEARCH_POST, list, start, keyword });
const getMoreSearchResult = (list, start) => ({ type: GET_MORE_SEARCH_RESULT, list, start });
const updateSearchPost = (postId, post) => ({ type: UPDATE_SEARCH_POST, postId, post });
const delSearchPost = (postId) => ({ type: DEL_SEARCH_POST, postId });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
  keyword: '',
};

// MIDDLEWARE
const searchPostDB = (keyword, limit = 10) => {
  return function (dispatch, getState) {
    const start = getState().search.start;

    if (start === null) return;

    instance.get(`/api/search?keyword=${keyword}&start=${start}&limit=${limit + 1}`).then((res) => {
      const result = res.data.result;

      if (result.length < limit + 1) {
        dispatch(getMoreSearchResult(result, null));
        return;
      }

      result.pop();
      dispatch(getMoreSearchResult(result, start + limit));
    });
  };
};

// REDUCER
export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_POST:
      return { list: action.list, start: action.start, keyword: action.keyword };

    case GET_MORE_SEARCH_RESULT:
      return { ...state, list: [...state.list, ...action.list], start: action.start };

    case UPDATE_SEARCH_POST:
      const updatePostList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return action.post;
        }

        return post;
      });

      return { ...state, list: updatePostList };

    case DEL_SEARCH_POST:
      const delPostList = state.list.filter((post) => post.postId !== action.postId);

      return { ...state, list: delPostList };

    default:
      return state;
  }
}

const searchActions = {
  searchPost,
  updateSearchPost,
  delSearchPost,
  searchPostDB,
};

export { searchActions };
