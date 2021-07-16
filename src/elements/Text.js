import React from "react";
import styled from "styled-components";

const TextStyle = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  text-indent: ${(props) => props.textIndent};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  word-break: break-all;
  white-space: pre-line;
`;

const Text = ({ children, ...props }) => {
  return <TextStyle {...props}>{children}</TextStyle>;
};

Text.defaultProps = {
    
};

export default Text;
