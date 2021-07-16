import React from "react";
import styled from "styled-components";

import { Text } from "../elements";

const InputBox = (props) => {

    return(
        <div>
            <Text>Tumblr</Text>
            <InputStyle placeholder="이메일" />
        </div>
    );
}

const InputStyle = styled.input`
    width: 100%;
    margin: 0;
    padding: 11px 13px;
    border: none;
    font-size: 16px;
    line-height: 1.4;
`;

InputBox.defaultProps = {};

export default InputBox;