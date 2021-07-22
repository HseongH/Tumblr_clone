// LIBRARY
import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { getCookie } from '../common/cookie';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Input, Button, Title, Grid } from '../elements/index';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  const login = () => {
    if (!userInfo.email) {
      window.alert('이메일을 입력해주세요.');
      return;
    }

    if (!userInfo.password) {
      window.alert('비밀번호를 입력해주세요.');
      return;
    }

    dispatch(userActions.loginAction(userInfo));
  };

  useEffect(() => {
    if (getCookie()) window.location.replace('/');
  }, []);

  return (
    <Grid
      width="100%"
      addstyle={() => {
        return css`
          height: calc(100vh - 160px);
          ${flexBox()};
          flex-direction: column;
        `;
      }}
    >
      <Title
        fontSize="70px"
        textAlign="center"
        addstyle={() => {
          return css`
            display: block;
            color: white;
            width: 100%;
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
            setUserInfo({ ...userInfo, email: event.target.value });
          }}
        />

        <Input
          bgColor="white"
          width="330px"
          padding="11px 13px"
          type="password"
          placeholder="비밀번호"
          margin="1% auto 0 auto"
          changeEvent={(event) => {
            setUserInfo({ ...userInfo, password: event.target.value });
          }}
        />

        <Link to="/" style={{ margin: '1% auto' }}>
          <Button
            disabled={!(userInfo.email && userInfo.password)}
            clickEvent={login}
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
            로그인
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Login;
