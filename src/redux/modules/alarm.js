// AXIOS
import instance from '../../common/axios';

// ACTIONS
const GET_ALARM = 'GET_ALARM';
const GET_MORE_ALARM = 'GET_MORE_ALARM';
const DELETE_ALARM = 'DELETE_ALARM';
const GET_RECOMMEND = 'GET_RECOMMEND';
const ADD_FOLLOW = 'ADD_FOLLOW';

// ACTION CREATOR
const getAlarm = (alarmList, start) => ({ type: GET_ALARM, alarmList, start });
const getMoreAlarm = (alarmList, start) => ({ type: GET_MORE_ALARM, alarmList, start });
const deleteAlarm = () => ({ type: DELETE_ALARM });
const getRecommend = (recommendList) => ({ type: GET_RECOMMEND, recommendList });
const addFollow = (userId) => ({ type: ADD_FOLLOW, userId });

// INITIALSTATE
const initialState = {
  list: [],
  start: 0,
  recommend: [],
};

const getAlarmDB = (type, limit = 10) => {
  return function (dispatch) {
    instance
      .get(`/api/alarm?alarmType=${type}&start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getAlarm(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getAlarm(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getMoreAlarmDB = (type, limit = 10) => {
  return function (dispatch, getState) {
    const start = getState().alarm.start;

    if (start === null) return;

    instance
      .get(`/api/alarm?alarmType=${type}&start=${start}&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getMoreAlarm(res.data.result, null));
          return;
        }

        res.data.result.pop();
        dispatch(getMoreAlarm(res.data.result, start + limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const deleteAllAlarms = () => {
  return function (dispatch) {
    instance
      .delete('/api/alarm')
      .then((res) => {
        dispatch(deleteAlarm());
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getRecommendDB = () => {
  return function (dispatch) {
    instance
      .get('/api/post/blogs')
      .then((res) => {
        const recommendList = res.data.map((recommend) => {
          return { ...recommend, follow: false };
        });

        dispatch(getRecommend(recommendList));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export default function alarm(state = initialState, action) {
  switch (action.type) {
    case GET_ALARM:
      return { ...state, list: action.alarmList, start: action.start };

    case GET_MORE_ALARM:
      return { ...state, list: [...state.list, ...action.alarmList], start: action.start };

    case DELETE_ALARM:
      return { ...state, list: [], start: 0 };

    case GET_RECOMMEND:
      return { ...state, recommend: action.recommendList };

    case ADD_FOLLOW:
      const newRecommendList = state.recommend.map((recommend) => {
        if (recommend.userId === action.userId) {
          return { ...recommend, follow: true };
        }

        return recommend;
      });

      return { ...state, recommend: newRecommendList };

    default:
      return state;
  }
}

export const alarmActions = {
  getAlarm,
  getMoreAlarm,
  getRecommend,
  deleteAllAlarms,
  getAlarmDB,
  getMoreAlarmDB,
  getRecommendDB,
  addFollow,
};
