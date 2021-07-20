// axios
import instance from '../../common/axios';

// redux-actions & immer
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// import { getCookie, setCookie, deleteCookie } from '../../common/cookie';

// function

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const AUTH_USER = 'AUTH_USER';
const CHECK_EMAIL = 'CHECK_EMAIL';

// userId, nickname, profileImg
// action creators
const logIn = createAction(LOG_IN, (user) => user);
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const authUser = createAction(AUTH_USER, (userInfo) => ({ userInfo }));
const checkEmail = createAction(CHECK_EMAIL, (email) => ({ email }));

// initialState
const initialState = {
  user: null,
  is_login: false,
  is_check: false,
  userId: null,
  nickname: null,
  profileImg: null,
  email: null,
};

// middleware actions
const authUserDB = () => {
  return function (dispatch) {
    instance
      .post('/api/user/me')
      .then((res) => {
        console.log(res);
        dispatch(authUser(res.data));
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
          email: res.data.userId,
          nickname: user.nickname,
        };

        dispatch(checkEmail(userInfo));
        // dispatch(logIn(res.data.cookie));

        // setCookie(res.data.cookie);

        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('아이디 또는 패스워드가 올바르지 않습니다.');
      });
  };
};

const loginCheck = (cookie) => {
  return function (dispatch) {
    if (cookie) {
      dispatch(logIn(cookie));
    }
  };
};

const emailCheck = (email) => {
  return function (dispatch) {
    instance
      .post('/api/login/email', { email: email })
      .then((res) => {
        dispatch(checkEmail(true));
        window.alert('사용 가능한 이메일입니다.');
      })
      .catch((error) => {
        dispatch(checkEmail(false));
        window.alert('이미 사용중인 이메일입니다.');
      });
  };
};

const signupDB = (email, password, nickname) => {
  return function () {
    instance
      .post('/api/sign', {
        email: email,
        password: password,
        nickname: nickname,
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

// reducer
export default handleActions(
  {
    [AUTH_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.userInfo.userId;
        draft.nickname = action.payload.userInfo.nickname;
        draft.profileImg = action.patload.userInfo.profileImg;
      }),

    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.cookie = action.payload.cookie;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // removeAuthorization();
        // deleteCookie('Authorization');
        draft.userId = null;
        draft.email = null;
        draft.nickname = null;
        draft.cookie = null;
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
  logOut,
  checkEmail,
  signupDB,
  authUserDB,
  loginAction,
  loginCheck,
  emailCheck,
};

export { userActions };
