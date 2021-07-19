// LIBRARY
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// STYLE
import { flexBox } from '../common/style';

const Logo = ({ children, ...props }) => {
  return (
    <LogoStyle {...props}>
      <Link to="/">{children}</Link>
    </LogoStyle>
  );
};

const LogoStyle = styled.h1`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 3px;
  ${flexBox()};

  a {
    color: ${(props) => `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  }
`;

Logo.defaultProps = {
  color: 'white',
  width: '50px',
  height: '50px',
};

export default Logo;
