// LIBRARY
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

// STYLE
import { flexBox, flexHoz, flexVer } from "../common/style";

// COMPONENTS
import InputBox from "../components/InputBox";

// ELEMENTS
import { Input, Button, Text, Grid } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid
        appendStyle={() => {
          flexBox();
        }}
      >
        <Text
          fontSize="64px"
          fontWeight="bold"
          color="whiteOnDark"
          textAlign="center"
        >
          tumblr
        </Text>
        <Input
          bgColor="whiteOnDark"
          width="300px"
          type="email"
          placeholder="이메일"
        />
        <Button></Button>
      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps = {};

export default Login;
