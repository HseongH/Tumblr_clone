// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// COMPONENTS

// ELEMENTS
import { Input, Button, Text, Grid } from '../elements';

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid
        addStyle={() => {
          flexBox();
        }}
        style={{ margin: '20% auto 0 auto' }}
      >
        <Text fontSize="70px" fontWeight="bold" color="whiteOnDark" textAlign="center">
          tumblr
        </Text>
        <Grid
          addStyle={() => {
            flexBox();
            return css`
              width: 100%;
              height: 100%;
              text-align: center;
            `;
          }}
          style={{ margin: '5% auto 0 auto' }}
        >
          <Input
            bgColor="whiteOnDark"
            width="60%"
            type="email"
            placeholder="이메일"
            padding="11px 13px"
          />

          <Button
            addStyle={() => {
              return css`
                font-weight: bold;
                width: 60%;
              `;
            }}
            color="black"
            bgColor="blue"
            margin="2% 0 0 0"
            padding="10px 15px"
          >
            다음
          </Button>
          <Grid
            addStyle={() => {
              flexBox();
            }}
          >
            <Button
              color="black"
              bgColor="blue"
              padding="10px 15px"
              margin="10px"
              addStyle={() => {
                return css`
                  font-weight: bold;
                `;
              }}
            >
              가입
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps = {};

export default Login;
