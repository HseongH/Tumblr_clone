import React from "react";
import styled from "styled-components";

const InputBox = ({props}) => {

    return(
        <InputBoxStyle {...props}>
            
        </InputBoxStyle>
    );
}

const InputBoxStyle = styled.div`
    width: ${(props) => props.width};

`;

InputBox.defaultProps = {
    width: '300px',
};

export default InputBox;