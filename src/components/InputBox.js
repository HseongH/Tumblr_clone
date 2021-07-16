import React from "react";
import styled from "styled-components";

const InputBox = (props) => {

    return(
        <div>
            <TitleStyle>tumblr</TitleStyle>
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

const TitleStyle = styled.h1`
    font-size: 64px;
    font-weight: 800;
    text-align: center;
    color: white;
`;

InputBox.defaultProps = {};

export default InputBox;