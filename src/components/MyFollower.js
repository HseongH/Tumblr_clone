// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from 'styled-components';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Grid, Text, Image } from '../elements';

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
        <Grid width="36px" height="36px" overflow="hidden" margin="0 12px 0 0">
          <Image
            src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
            alt="profile image"
          />
        </Grid>

        <Text fontWeight="bold">{post.nickname}</Text>
      </Grid>

      <Follow isFollow={!post.follows} userId={post.userId} />
    </Grid>
  );
};

export default MyFollower;
