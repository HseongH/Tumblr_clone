// axios
import instance from "../../common/axios";

// redux-actions & immer
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// function

//actions
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const AUTH_USER = "AUTH_USER";
const CHECK_EMAIL = "CHECK_EMAIL";

// userId, nickname, profileImg
// action creators
// const logIn = createAction(LOG_IN, (user) => (user));
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
      .post("/api/user/me")
      .then((res) => {
        console.log(res);
        dispatch(authUser(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const signupDB = (email, password, nickname) => {
  return function () {
    instance
      .post("/api/sign", {
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

    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),

    [CHECK_EMAIL]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userActions = {
  logOut,
  checkEmail,
  signupDB,
  authUserDB,
};

export { userActions };
