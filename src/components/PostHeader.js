// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

const HeaderStyle = styled.header`
  ${flexBox('space-between')};
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 10px;

  ${(props) => props.addstyle()};
`;

const PostHeader = ({ children, ...props }) => {
  return <HeaderStyle {...props}>{children}</HeaderStyle>;
};

PostHeader.defaultProps = {
  addstyle: () => {},
};

export default PostHeader;
