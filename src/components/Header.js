// LIBRARY
import React from "react";
import styled from "styled-components";

// STYLE
import { flexBox, flexVer } from "../common/style";

// COMPONENTS
import Logo from "./Logo";

// ELEMENTS
import { Input, Button, Grid, Image } from "../elements/index";

// ICON
import HomeIcon from '@material-ui/icons/Home';
import { FaBolt } from "react-icons/fa"
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';

const Header = (props) => {
  return (
    <HeaderStyle>
      <HeaderWrap>  {/* flexBox함수 */}
        <Logo>  {/* 로고에 링크 태그 들어가야됨 */}
          <Image
            src="https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png"
            alt="tumblr logo"
          />
        </Logo>
        <div> {/* div 크기 설정 */}
          {/* span 태그로 검색 아이콘 넣기 */}       
            
            <Input placeholder="Tumblr 검색" />
        </div>
      </HeaderWrap>
      
      <HomeIcon fontSize="large" />
      <FaBolt fontSize="26px" />
      <PersonIcon fontSize="large" />
      <CreateIcon fontSize="large" />

      <Grid appendStyle={flexVer}>
        {/* 버튼 안에 아이콘 넣고 마진값 설정, 작성 버튼 크기 지정해주고 background-color 지정, 링크 태그 들어가야됨 */}
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderWrap = styled.div`
  ${flexBox()};
  width: 100%;
  height: 54px;
`;

const HeaderStyle = styled.header`
  ${flexBox("space-between")};
  width: 100%;
  max-width: 1716px;
  padding: 0 20px 0 22px;
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

const IconStyle = styled.span`

`;

Header.defaultProps = {};

export default Header;
