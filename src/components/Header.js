import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

import { flexBox } from "../common/style";
import { Input, Button } from "../elements/index";

import ButtonContainer from "./ButtonContainer";

const Header = (props) => {
  return (
    <HeaderStyle>
        {/* flexBox함수 들어가야됨 */}
      <div> 
        {/* 로고에 링크 태그 들어가야됨 */}
        <Logo />
        <div>
          {/* div 크기 설정 */}
          {/* span 태그로 검색 아이콘 넣기 */}
          <Input placeholder="Tumblr 검색" />
        </div>
      </div>

      <ButtonContainer>
        {/* 버튼 안에 아이콘 넣고 마진값 설정, 작성 버튼 크기 지정해주고 background-color 지정, 링크 태그 들어가야됨 */}
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </ButtonContainer>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  ${flexBox("space-between")}
  width: 100%;
  max-width: 1716px;
  padding: 0 20px 0 22px;
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

Header.defaultProps = {};

export default Header;