// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Grid, Text } from '../elements';

// REDUX

// COMPONENTS
import Follow from './Follow';

const MyFollower = ({ post }) => {
  return (
    <Grid
      bgColor="white"
      padding="15px"
      addstyle={() => {
        return css`
          ${flexBox('space-between')};
        `;
      }}
    >
      <Grid
        width="auto"
        addstyle={() => {
          return css`
            ${flexVer()};
          `;
        }}
      >
        <Grid
          width="36px"
          height="36px"
          overflow="hidden"
          margin="0 12px 0 0"
          addstyle={() => {
            return css`
              background-image: ${post.profileImg
                ? post.profileImg
                : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'};
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            `;
          }}
        ></Grid>

        <Text fontWeight="bold">{post.nickname}</Text>
      </Grid>

      <Follow isFollow={!post.follows} userId={post.userId} />
    </Grid>
  );
};

export default MyFollower;
