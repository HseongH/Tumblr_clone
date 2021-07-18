// LIBRARY
import React from "react";
import styled from "styled-components";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import Text from "../elements/Text";

const InputBox = ({ children, ...props }) => {
  return (
    <div>
      <Text
        appendStyle={flexBox}
        style={{
          color: "rgb(255, 255, 255)",
          fontWeight: "bold",
          fontSize: "60px",
          padding: "14px",
          marginTop: "10%"
        }}
      >
        tumblr
      </Text>
      <InputBoxStyle {...props}></InputBoxStyle>
    </div>
  );
};

const InputBoxStyle = styled.div`
  ${flexBox};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: column;
  margin-top: 25%;
  background-color: ${(props) => props.bgColor}
`;

InputBox.defaultProps = {
  width: "100%",
  height: "100%",
  bgColor: "none",
};

export default InputBox;
