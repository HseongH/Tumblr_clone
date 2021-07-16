// axios
import instance from '../../common/axios';

// redux-actions & immer
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// function

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const AUTH = 'AUTH';
const CHECK_EMAIL = 'CHECK_EMAIL';

// userId, nickname, profile
// action creators
const logIn = createAction(LOG_IN, (session) => ({ session }));
const logOut = createAction(LOG_OUT);
const auth = createAction(AUTH, (userId, nickname, profile) => ({
  userId,
  nickname,
  profile,
}));
const emailCheck = createAction(CHECK_EMAIL, (email) => ({ email }));

// initialState
const initialState = {
  session: null,
  is_login: false,
  is_check: false,
  userId: null,
  nickname: null,
  profile: null,
  email: null,
};

// middleware actions
const authDB = () => {
  return function (dispatch) {
    instance
      .post('api/user/me')
      .then((res) => {
        dispatch(auth(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/login', user)
      .then((res) => {
        const userInfo = {
          userId: res.data.userId,
          nickname: res.data.nickname,
          profile: res.data.profile,
        };

        dispatch(auth(userInfo));
        dispatch(logIn(res.data.session));

        //   setCookie(res.data.cookie);

        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('이메일 또는 패스워드가 올바르지 않습니다.');
      });
  };
};

const logInCheck = (cookie) => {
  return function (dispatch) {
    if (cookie) {
      dispatch(logIn(cookie));
    }
  };
};

const checkEmail = (id) => {
  return function (dispatch) {
    instance
      .post('/api/login/email')
      .then((res) => {
        dispatch(emailCheck(true));
        window.alert('사용 가능한 이메일입니다.');
      })
      .catch((error) => {
        dispatch(emailCheck(false));
        window.alert('이미 존재하는 이메일입니다.');
      });
  };
};

const signupDB = (email, pwd, bgName) => {
  return function () {
    instance
      .post('/api/sign', { userId: email, password: pwd, blogName: bgName })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.messge;

        console.log(errorCode, errorMessage);
      });
  };
};

// reducer
export default handleActions(
  {
    [AUTH]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.userInfo.userId;
        draft.nickname = action.payload.userInfo.nickname;
        draft.profile = action.payload.userInfo.profile;
      }),

    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.session = action.payload.session;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // removeCookie();
        draft.userId = null;
        draft.nickname = null;
        draft.session = null;
        draft.is_login = false;
      }),

    [CHECK_EMAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = action.payload.email;
      }),
  },
  initialState
);

const userActions = {
  authDB,
  loginAction,
  logInCheck,
  checkEmail,
  signupDB,
};
