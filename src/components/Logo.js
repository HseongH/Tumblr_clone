import React from 'react';
import styled from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

const Logo = ({ children, ...props }) => {
  return <LogoStyle {...props}>{children}</LogoStyle>;
};

const LogoStyle = styled.h1`
  ${flexBox()};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 3px;
`;

Logo.defaultProps = {
  width: '50px',
  height: '50px',
};

export default Logo;
