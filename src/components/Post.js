// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const PostStyle = styled.article`
  width: ${(props) => props.theme.size.postWidth};
  background: ${(props) => `rgb(${props.theme.palette.white})`};
  ${borderBox('3px', '15px 20px')};
`;

const Post = (props) => {
  return <div></div>;
};

Post.propTypes = {};

export default Post;
