// LIBRARY
import React from "react";
import { css } from "styled-components";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text, Input, Button, Image } from "../elements";

// COMPONENTS
import BlogUser from "../components/BlogUser";
import Logo from "../components/Logo";

// ICON
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Following = (props) => {
  return (
    <React.Fragment>
      <Grid
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
            max-width: 990px;
            padding: 0 8px;
            box-sizing: border-box;
            margin: 8% auto 0 auto;
          `;
        }}
      >
        <Grid
          width="100%"
          margin="0 0 0 -35%"
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
            `;
          }}
        >
          <Text fontSize="18px" color="white">
            팔로잉 2명
          </Text>

          <Grid
            addstyle={() => {
              return css`
                display: flex;
              `;
            }}
          >
            <Input
              margin="1% 2% 1% 0"
              width="100%"
              bgColor="rgba(255, 255, 255, 0.25)"
              placeholder="팔로우하려면 사용자 이름, URL 또는 이메일 주소를 입력하세요."
            />

            <Button
              fontWeight="bold"
              padding="14px 8px"
              margin="1% 0"
              addstyle={() => {
                return css`
                  border: 2px solid rgba(255, 255, 255, 0.4);
                  background-color: none;
                  color: rgba(255, 255, 255, 0.65);
                `;
              }}
            >
              팔로우
            </Button>
          </Grid>

          {/* 구분선 -------------------------------- */}

          <Grid margin="2% 0 0 0">
            <Grid
              padding="12px"
              bgColor="white"
              addstyle={() => {
                return css`
                  display: flex;
                  align-items: center;
                `;
              }}
            >
              <Image
                addstyle={() => {
                  return css`
                    width: 36px;
                  `;
                }}
                height="36px"
                src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
              />

              <Grid
                magin="0 0 3% 0"
                addstyle={() => {
                  return css`
                    display: flex;
                    flex-direction: column;
                    padding: 4px;
                  `;
                }}
              >
                <Text
                  fontSize="13px"
                  fontWeight="bold"
                  addstyle={() => {
                    return css`
                      padding: 2px;
                    `;
                  }}
                >
                  hangulteam
                </Text>

                <Text
                  fontSize="14px"
                  fontWeight="300"
                  addstyle={() => {
                    return css`
                      padding: 2px;
                    `;
                  }}
                >
                  5일 전 업데이트됨
                </Text>
              </Grid>

              <Text
                margin="0 -30% 0 30%"
                fontSize="14px"
                color="blue"
                addstyle={() => {
                  return css`
                    padding: 2px;
                    width: 100%;
                  `;
                }}
              >
                언팔로우
              </Text>

              <MoreVertIcon />
            </Grid>
          </Grid>

          {/* 구분선 -------------------------------- */}

          <Grid margin="0 0 0 0">
            <Grid
              padding="12px"
              bgColor="white"
              addstyle={() => {
                return css`
                  display: flex;
                  align-items: center;
                `;
              }}
            >
              <Image
                addstyle={() => {
                  return css`
                    width: 36px;
                  `;
                }}
                height="36px"
                src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
              />

              <Grid
                magin="0 0 3% 0"
                addstyle={() => {
                  return css`
                    display: flex;
                    flex-direction: column;
                    padding: 4px;
                  `;
                }}
              >
                <Text
                  fontSize="13px"
                  fontWeight="bold"
                  addstyle={() => {
                    return css`
                      padding: 2px;
                    `;
                  }}
                >
                  staff
                </Text>

                <Text
                  fontSize="14px"
                  fontWeight="300"
                  addstyle={() => {
                    return css`
                      padding: 2px;
                    `;
                  }}
                >
                  5일 전 업데이트됨
                </Text>
              </Grid>

              <Text
                margin="0 -30% 0 30%"
                fontSize="14px"
                color="blue"
                addstyle={() => {
                  return css`
                    padding: 2px;
                    width: 100%;
                  `;
                }}
              >
                언팔로우
              </Text>

              <MoreVertIcon />
            </Grid>
          </Grid>
        </Grid>

        {/* 구분선 -------------------------------- */}

        <Grid
          width="100%"
          bgColor=""
          addstyle={() => {
            return css`
              margin: 0 -50% 38px 10%;
              height: 300px;
            `;
          }}
        >
          <BlogUser />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Following;
