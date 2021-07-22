// axios
import instance from '../../common/axios';

// redux-actions & immer
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// REDUX
import { imgActions } from './image';
import { postActions } from './post';

// COOKIE
import { setCookie, delCookie } from '../../common/cookie';

//actions
const LOG_OUT = 'LOG_OUT';
const AUTH_USER = 'AUTH_USER';
const CHECK_EMAIL = 'CHECK_EMAIL';
const SET_PROFILE = 'SET_PROFILE';

// userId, nickname, profileImg
// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const authUser = createAction(AUTH_USER, (userInfo) => ({ userInfo }));
const checkEmail = createAction(CHECK_EMAIL, (email) => ({ email }));
const setProfile = createAction(SET_PROFILE, (profile) => ({ profile }));

// initialState
const initialState = {
  is_login: false,
  userId: null,
  nickname: null,
  profileImg: 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png',
};

// middleware actions
const authUserDB = () => {
  return function (dispatch) {
    instance
      .post('/api/user/me')
      .then((res) => {
        dispatch(authUser(res.data));
      })
      .catch((error) => {
        window.location.replace('/login');
      });
  };
};

const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/login', user)
      .then((res) => {
        setCookie(res.data.token);
        dispatch(authUserDB());

        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        window.alert('아이디 또는 패스워드가 올바르지 않습니다.');
      });
  };
};

const signupDB = (email, password, nickname) => {
  return function () {
    instance
      .post('/api/sign', {
        email,
        password,
        nickname,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

const setProfileDB = () => {
  return function (dispatch, getState) {
    dispatch(
      imgActions.uploadImageDB(() => {
        const [profileImg] = getState().image.imageUrl;
        const userId = getState().user.userId;

        instance
          .post('/api/user/profile', { profileImg })
          .then((res) => {
            dispatch(postActions.editProfileImg(userId, profileImg));
          })
          .catch((error) => {
            console.error(error);
          });
      })
    );
  };
};

// reducer
export default handleActions(
  {
    [AUTH_USER]: (state, action) =>
      produce(state, (draft) => {
        const userInfo = action.payload.userInfo;

        draft.userId = userInfo.userId;
        draft.nickname = userInfo.nickname;
        if (userInfo.profileImg) draft.profileImg = userInfo.profileImg;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delCookie();
        draft.userId = null;
        draft.nickname = null;
        draft.profileImg = null;
        draft.is_login = false;
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
  setProfileDB,
};

export { userActions };
