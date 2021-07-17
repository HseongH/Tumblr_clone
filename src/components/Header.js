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
        <Grid
          appendStyle={flexVer}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            display: "flex",
            width: "50%"
          }}
        >
          <span style={{ color: "rgba(255, 255, 255, 0.5)", padding: "0 4px" }}>
            <SearchIcon fontSize="large" />
          </span>

          <Input placeholder="Tumblr 검색" />
        </Grid>
      </HeaderWrap>

      <Grid appendStyle={flexVer}>
        <Grid
          appendStyle={() => {
            flexBox();
          }}
          width="80%"
          padding="0 2%"
          margin="0 0 0 10%"
        >
          {/* 링크 태그 들어가야됨 */}
          <Button margin="0 15% 0 0" >
            <HomeIcon fontSize="large" />
          </Button>
          <Button margin="0 15% 0 0">
            <FaBolt fontSize="30px" />
          </Button >
          <Button margin="0 15% 0 0">
            <PersonIcon fontSize="large" />
          </Button>
          <Button margin="0 0 0 0" bgColor="blue" color="black">
            <CreateIcon fontSize="large" />
          </Button>
        </Grid>
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

Header.defaultProps = {};

export default Header;
