// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Text, Title, Image, Grid } from '../elements/index';

const headerStyle = styled.article`
  ${flexBox('space-between')};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Post = ({ post }) => {
  return (
    <Grid
      padding="15px 20px"
      margin="0 0 20px 0"
      addStyle={() => {
        return css`
          position: relative;
        `;
      }}
    >
      <headerStyle></headerStyle>

      <Title fontSize="1.625rem" margin="15px 0"></Title>

      <Image />

      <Text margin="15px 0"></Text>
    </Grid>
  );
};

export default Post;
