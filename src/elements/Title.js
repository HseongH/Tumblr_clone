import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};

  ${(props) => props.appendStyle()};
`;

const Title = ({ children, ...props }) => {
  return <TitleStyle {...props}>{children}</TitleStyle>;
};

Title.defaultProps = {
  lineHeight: 1.5,
  fontWeight: 700,
  appendStyle: () => {},
};

export default Title;
