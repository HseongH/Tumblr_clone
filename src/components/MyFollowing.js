// LIBRARY
import React from "react";
import { css } from "styled-components";

// ELEMENTS
import { Grid, Text, Image } from "../elements";

const MyFollowing = ({ post }) => {
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
              {post.nickname}
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MyFollowing;
