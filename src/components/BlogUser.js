import React from 'react';
import { css } from 'styled-components';

import { Grid, Image, Text } from '../elements';

const BlogUser = (props) => {
  return (
    <Grid
      width="100%"
      bgColor=""
      addstyle={() => {
        return css`
          margin: 0 -10% 38px 10%;
          height: 300px;
        `;
      }}
    >
      <Text
        color="white"
        fontSize="24px"
        fontWeight="bold"
        addstyle={() => {
          return css``;
        }}
      >
        요런 블로그 어때요!
      </Text>

      <hr style={{ marginRight: '20%' }} />

      <Grid
        width="100%"
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
              border-radius: 3px;
              width: 40px;
              margin: 3% 0 1% 0;
              /* padding: 10px; */
              align-items: center;
              justify-content: center;
            `;
          }}
          src="https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png"
          margin="0 0 20px"
        />

        <Text color="white" margin="0 10%">
          asfdsdfds
        </Text>
        <Text fontWeight="bold" fontSize="14px" color="blue" margin="0 0 0 15%">
          팔로우
        </Text>
      </Grid>
    </Grid>
  );
};

export default BlogUser;
