// LIBRARY
import React, { useEffect } from 'react';
import { css } from 'styled-components';

import { getCookie } from '../common/cookie';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Button, Title, Input, Grid } from '../elements';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nickname, setNickname] = React.useState('');

  const signup = () => {
    if (email === '' || password === '' || nickname === '') {
      window.alert('입력하지 않은 항목이 있습니다.');
      return;
    }
    dispatch(userActions.signupDB(email, password, nickname));
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
          changeEvent={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          bgColor="white"
          width="330px"
          padding="11px 13px"
          placeholder="비밀번호"
          margin="1% auto 0 auto"
          changeEvent={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type="text"
          bgColor="white"
          width="330px"
          padding="11px 13px"
          placeholder="블로그 이름"
          margin="1% auto 0 auto"
          changeEvent={(e) => {
            setNickname(e.target.value);
          }}
        />
        <Link to="/login" style={{ margin: '1% auto' }}>
          <Button
            disabled={!(email && password && nickname)}
            clickEvent={signup}
            color="black"
            bgColor="blue"
            padding="10px 15px"
            addstyle={() => {
              return css`
                width: 330px;
                font-weight: bold;
              `;
            }}
          >
            가입
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SignUp;
