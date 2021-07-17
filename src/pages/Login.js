// LIBRARY
import React from "react";

// STYLE
import { flexBox } from "../common/style";

// COMPONENTS
import InputBox from "../components/InputBox";

// ELEMENTS
import { Input, Button, Grid } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <InputBox />
      <Input
        appendStyle = {() => {
            
        }}
        type="email"
        placeholder="이메일"
        width="20%"
        bgColor="rgb(255, 255, 255)"
      />
    </React.Fragment>
  );
};

export default Login;
