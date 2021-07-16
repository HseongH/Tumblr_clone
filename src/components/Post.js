// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox, flexBox } from '../common/style';

// ELEMENTS
import { Text, Title, Image } from '../elements/index';

const PostStyle = styled.article`
  width: ${(props) => props.theme.size.postWidth};
  background: ${(props) => `rgb(${props.theme.palette.white})`};
  margin-bottom: 20px;
  position: relative;
  ${borderBox('3px', '15px 20px')};

  header {
    ${flexBox('space-between')};
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;

const Post = ({ post }) => {
  return (
    <PostStyle>
      <header></header>

      <Title fontSize="1.625rem" margin="15px 0"></Title>

      <Image />

      <Text margin="15px 0"></Text>
    </PostStyle>
  );
};

export default Post;
