// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Button, Title, Input, Grid } from '../elements';

// HISTORY
import { history } from '../redux/configstore';

//REDUX-ACTION & REACT-HOOK
import { userActions } from '../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';
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

    window.alert('회원가입이 완료되었습니다. 로그인을 해주세요.');
    history.push('/login');
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
          margin="10% 0 0 0"
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
            changeEvent={(e) => {
              setEmail(e.target.value);
              // console.log(e.target.value)
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
              // console.log(e.target.value)
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

          <Button
            clickEvent={signup}
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
            가입
          </Button>

          <Button // header에 적용해야됨
            // onClick={history.push('/login')}
            color="black"
            bgColor="green"
            padding="10px 15px"
            margin="0 auto"
            addstyle={() => {
              return css`
                width: 72px;
                font-weight: bold;
              `;
            }}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignUp;
