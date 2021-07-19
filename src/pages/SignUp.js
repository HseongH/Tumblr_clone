// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Button, Title, Input, Grid } from '../elements';

const SignUp = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            align-items: center;
            justify-content: center;
            display: flex;
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
          />
          <Input
            bgColor="white"
            width="330px"
            padding="11px 13px"
            placeholder="비밀번호"
            margin="1% auto 0 auto"
          />
          <Input
            bgColor="white"
            width="330px"
            padding="11px 13px"
            placeholder="블로그 이름"
            margin="1% auto 0 auto"
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
            가입
          </Button>

          <Button // header에 적용해야됨
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

// const SignUpHeader = styled.header`

// `;

export default SignUp;
