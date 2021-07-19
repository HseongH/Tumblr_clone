// LIBRARY
import React, {useState} from 'react';
import { css } from 'styled-components';

import { getCookie, setCookie, deleteCookie } from "../common/cookie";

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Input, Button, Title, Grid } from '../elements/index';

// HISTORY
import history from "../redux/modules/user";

//REDUX-ACTION & REACT-HOOK
import { userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({email: '', password: ''});

  const login = () => {
    if (!userInfo.email) {
      window.alert("이메일을 입력해주세요.");
      return;
    }

    if(!userInfo.password) {
      window.alert("비밀번호를 입력해주세요.");
      return;
    }

    dispatch(userActions.loginAction(userInfo));
  };

  return (
    <React.Fragment>
      <Grid
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            flex-direction: column;
            vertical-align: baseline;
          `;
        }}
      >
        <Title
          fontSize="70px"
          fontWeight="bold"
          textAlign="center"
          margin="15% 0 0 0"
          addstyle={() => {
            return css`
              display: block;
              color: white;
              width: 100%;
              height: 100%;
            `;
          }}
        >
          tumblr
        </Title>

        <Grid
          width="100%"
          margin="0 auto"
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
            `;
          }}
        >
          <Input
            bgColor="white"
            width="330px"
            padding="11px 13px"
            type="email"
            placeholder="이메일"
            margin="0 auto"
            changeEvent={(event) => {
              setUserInfo({...userInfo, email: event.target.value});
            }}
          />

          <Button
            color="black"
            bgColor="blue"
            padding="10px 15px"
            margin="1% auto"
            addstyle={() => {
              return css`
                width: 330px;
                font-weight: bold;
              `;
            }}
          >
            다음
          </Button>

          <Button
            clickEvent={login}
            color="black"
            bgColor="blue"
            padding="10px 15px"
            margin="0 auto"
            addstyle={() => {
              return css`
                width: 60px;
                font-weight: bold;
              `;
            }}
          >
            가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
