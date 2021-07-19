// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Input, Button, Title, Grid } from '../elements/index';

const Login = (props) => {
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
