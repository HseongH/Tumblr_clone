// LIBRARY
import React from "react";
import { css } from "styled-components";

// STYLE
import { flexBox } from "../common/style";

// COMPONENTS

// ELEMENTS
import { Input, Button, Text, Grid } from "../elements";

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid
        appendStyle={() => {
          flexBox();
          return css`
            /* background-image: url("https://i.pinimg.com/originals/60/f2/60/60f2607be0f2d6be805f831117a6f03d.jpg");
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            padding: 20px; */
          `;
        }}
      >
        <Grid // tumblr
        >
          <Text
            fontSize="70px"
            fontWeight="bold"
            color="whiteOnDark"
            textAlign="center"
            style={{ marginTop: "40%" }}
          >
            tumblr
          </Text>
        </Grid>

        <Grid // 이메일 Input / 다음,가입 Button / Wrap
          appendStyle={() => {
            return css`
              width: 100%;
              height: 100%;
              text-align: center;
            `;
          }}
          style={{ margin: "4% auto", padding: "0" }}
        >
          
          <Grid // 이메일 Input
          >
            <Input
              bgColor="whiteOnDark"
              width="60%"
              type="email"
              placeholder="이메일"
              padding="11px 13px"
            />
          </Grid>

          <Grid // 다음 Button
          >
            <Button
              appendStyle={() => {
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
          </Grid>

          {/* <Grid // 가입 Button
            appendStyle={() => {}}
          >
            <Button
              color="black"
              bgColor="blue"
              padding="10px 15px"
              margin="10px"
              appendStyle={() => {
                return css`
                  font-weight: bold;
                `;
              }}
            >
              가입
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Login.defaultProps = {};

export default Login;
