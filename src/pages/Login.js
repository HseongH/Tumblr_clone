// LIBRARY
import React from "react";
import styled from "styled-components";

// STYLE
import { flexBox } from "../common/style";

// COMPONENTS
import InputBox from "../components/InputBox";

// ELEMENTS
import { Input, Button, Text, Grid } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <LoginBox>
        <Text
          appendStyle={flexBox}
          fontSize="64px"
          color="white"
          fontWeight="bold"
          
        >
          tumblr
        </Text>
        <Input type="email" placeholder="이메일" />
        <Button>다음</Button>
      </LoginBox>
    </React.Fragment>

    // <React.Fragment>
    //   <InputBox width="300px" height="300px" bgColor="gray">
    //     <Input
    //       appendStyle={() => {}}
    //       margin="0 40px"
    //       type="email"
    //       placeholder="이메일"
    //       width="30%"
    //       bgColor="rgb(255, 255, 255)"
    //     />
    //     <Button>다음</Button>
    //   </InputBox>
    // </React.Fragment>
  );
};

const LoginBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 0;
  background-color: red;
  margin: 50px;
`;

export default Login;
