// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

const Logo = ({ children, ...props }) => {
  return <LogoStyle {...props}>{children}</LogoStyle>;
};

const LogoStyle = styled.h1`
  /* background-image: url('https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png');
  background-size: cover;
  background-position: center; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 3px;
  ${flexBox()};
`;

Logo.defaultProps = {
  width: '50px',
  height: '50px',
};

export default Logo;
