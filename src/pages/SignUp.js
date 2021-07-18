// LIBRARY
import React from "react";
import { css } from "styled-components";
import { flexBox } from "../common/style";

// ELEMENTS
import { Button, Title, Input, Grid, Text } from "../elements";

const SignUp = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        appendStyle={() => {
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
        >
          tumblr
        </Title>

        <Grid>
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Input placeholder="블로그 이름" />
        </Grid>

        <Button>가입</Button>
      </Grid>

      <Text color="red">
        Header 로그인 Button / tumblr Title / 이메일 input / 비밀번호 input /
        블로그 이름 input / 가입 Button /
      </Text>
    </React.Fragment>
  );
};

SignUp.defaultProps = {};

export default SignUp;
