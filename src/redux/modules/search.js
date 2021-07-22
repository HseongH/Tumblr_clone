// AXIOS
import instance from '../../common/axios';

// ACTION
const SEARCH_POST = 'SEARCH_POST';
const GET_MORE_SEARCH_RESULT = 'GET_MORE_SEARCH_RESULT';

// ACTION CREATOR
const searchPost = (list, start, keyword) => ({ type: SEARCH_POST, list, start, keyword });
const getMoreSearchResult = (list, start) => ({ type: GET_MORE_SEARCH_RESULT, list, start });

// INITIAL STATE
const initialState = {
  list: [],
  start: 0,
  keyword: '',
};

// MIDDLEWARE
const searchPostDB = (keyword, limit = 10) => {
  return function (dispatch) {
    instance
      .get(`/api/search?keyword=${keyword}&start=0&limit=${limit + 1}`)
      .then((res) => {
        const result = res.data.result;

        if (result.length < limit + 1) {
          dispatch(searchPost(res.data.result, null, ''));
          return;
        }

        result.pop();
        dispatch(searchPost(result, limit, keyword));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMoreSearchResultDB = (limit = 10) => {
  return function (dispatch, getState) {
    const search = getState().search;

    const keyword = search.keyword;
    const start = search.start;

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

    default:
      return state;
  }
}

const searchActions = {
  searchPost,
  searchPostDB,
  getMoreSearchResultDB,
};

export { searchActions };
