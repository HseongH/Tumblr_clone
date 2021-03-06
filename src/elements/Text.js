import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  line-height: ${(props) => props.lineHeight};
  text-indent: ${(props) => props.textIndent};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  word-break: break-all;
  white-space: pre-line;

  ${(props) => props.addstyle()};
`;

const Text = ({ children, ...props }) => {
  return <TextStyle {...props}>{children}</TextStyle>;
};

Text.defaultProps = {
  color: 'black',
  addstyle: () => {},
};

export default Text;
