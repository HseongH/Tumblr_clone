import React from 'react';
import styled from 'styled-components';

const Logo = ({ children, ...props }) => {
  return <LogoStyle {...props} />;
};

const LogoStyle = styled.h1`
  background-image: url('https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png');
  background-size: cover;
  background-position: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 3px;
`;

Logo.defaultProps = {
  width: '50px',
  height: '50px',
};

export default Logo;
