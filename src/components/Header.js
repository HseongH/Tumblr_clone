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
import HomeIcon from "@material-ui/icons/Home";
import { FaBolt } from "react-icons/fa";
import PersonIcon from "@material-ui/icons/Person";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";

const Header = (props) => {
  return (
    <HeaderStyle>
      <HeaderWrap>
        <Logo>
          <Image
            src="https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png"
            alt="tumblr logo"
          />
        </Logo>
        <Grid appendStyle={flexVer} style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", display: "flex" }}>
          <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>
            <SearchIcon fontSize="large" />
          </span>

          <Input placeholder="Tumblr 검색" />
        </Grid>
      </HeaderWrap>

      <Grid appendStyle={flexVer} margin="0 0 0 35%">
        {/* 버튼 안에 아이콘 넣고 마진값 설정, 작성 버튼 크기 지정해주고 background-color 지정, 링크 태그 들어가야됨 */}
        <ButtonBoxStyle>
          <Button>
            <HomeIcon fontSize="large" />
          </Button>
          <Button>
            <FaBolt fontSize="28px" />
          </Button>
          <Button>
            <PersonIcon fontSize="large" />
          </Button>
          <Button>
            <CreateIcon fontSize="large" />
          </Button>
        </ButtonBoxStyle>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderWrap = styled.div`
  ${flexBox("left")};
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

const ButtonBoxStyle = styled.div`
  display: flex;
  & button {
    margin: 0 10px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

Header.defaultProps = {};

export default Header;
