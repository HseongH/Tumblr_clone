// LIBRARY
import React from "react";
import { css } from "styled-components";

// STYLE

// COMPONENTS

// ELEMENTS
import { Grid, Text, Image } from "../elements";

// ICON
import MoreVertIcon from "@material-ui/icons/MoreVert";

const MyFollowing = ({post}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MyFollowing;
