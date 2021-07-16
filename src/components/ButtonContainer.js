import React from "react";
import styled from "styled-components";
import { flexVer } from "../common/style";

const ButtonContainer = ({children, ...props}) => {

    return (
        <ButtonConStyle>
            {children}
        </ButtonConStyle>
    );
}

const ButtonConStyle = styled.div`
    ${flexVer()}
`;

ButtonContainer.defaultProps = {};

export default ButtonContainer;