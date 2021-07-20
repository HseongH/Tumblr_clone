// LIBRARY
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// STYLE
import { flexBox, flexVer, borderBox } from '../common/style';

// COMPONENTS
import Logo from './Logo';
import Alarm from './Alarm';
import User from './User';

// ELEMENTS
import { Input, Button, Grid, Image } from '../elements/index';

// ICON
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';

const Header = (props) => {
  const path = useLocation().pathname;
  const [searchBar, setSearchBar] = useState({
    alpha: 0.3,
    color: 'white',
  });

  const { is_login, nickname, profile } = useSelector(
    (state) => ({
      is_login: state.user.is_login,
      nickname: state.user.nickname,
      profile: state.user.profileImg,
    }),
    shallowEqual
  );

  return (
    <HeaderStyle>
      <Grid
        width="auto"
        addstyle={() => {
          return css`
            ${flexVer()};
          `;
        }}
      >
        <Logo>
          <Image
            src="https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png"
            alt="tumblr logo"
          />
        </Logo>

        <Grid addstyle={flexVer} width="480px" bgColor="white" opacity={searchBar.alpha}>
          <Grid color={searchBar.color} width="20px" margin="0 4px">
            <SearchIcon fontSize="medium" />
          </Grid>

          <Input
            placeholder="Tumblr 검색"
            focusEvent={() => {
              setSearchBar({
                alpha: 1,
                color: 'black',
              });
            }}
            blurEvent={() => {
              setSearchBar({
                alpha: 0.3,
                color: 'white',
              });
            }}
          />
        </Grid>
      </Grid>

      <Grid
        addstyle={() => {
          return css`
            position: relative;
            ${flexVer()};

            & > button {
              margin-right: 30px;

              &:last-child {
                margin-right: 0;
              }

              & a {
                color: rgba(${(props) => props.theme.palette.white}, ${path === '/' ? 1 : 0.5});
              }
            }
          `;
        }}
        width="auto"
      >
        <Button>
          <Link to="/">
            <HomeIcon fontSize="large" />
          </Link>
        </Button>

        <Alarm nickname={nickname} />

        <User opacity={path === '/mypage' ? '1' : '0.5'} nickname={nickname} profile={profile} />

        <Button padding="0 12px" bgColor="blue" color="black">
          <CreateIcon fontSize="large" />
        </Button>
      </Grid>

      {/* {is_login ? (
        <Grid
          addstyle={() => {
            return css`
              position: relative;
              ${flexVer()};

              & > button {
                margin-right: 30px;

                &:last-child {
                  margin-right: 0;
                }

                & a {
                  color: rgba(${(props) => props.theme.palette.white}, ${path === '/' ? 1 : 0.5});
                }
              }
            `;
          }}
          width="auto"
        >
          <Button>
            <Link to="/">
              <HomeIcon fontSize="large" />
            </Link>
          </Button>

          <Alarm />

          <User opacity={path === '/mypage' ? '1' : '0.5'} nickname={nickname} profile={profile} />

          <Button padding="0 12px" bgColor="blue" color="black">
            <CreateIcon fontSize="large" />
          </Button>
        </Grid>
      ) : (
        <Link to={path === '/signup' ? '/login' : 'signup'}>
          <Button
            bgColor={path === '/signup' ? 'green' : 'blue'}
            padding="10px 15px"
            color="black"
            addstyle={() => {
              return css`
                font-weight: bold;
              `;
            }}
          >
            {path === '/signup' ? '로그인' : '가입'}
          </Button>
        </Link>
      )} */}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  ${flexBox('space-between')};
  background: rgb(${(props) => props.theme.palette.navy});
  width: 100%;
  max-width: 1716px;
  ${borderBox(0, '0 20px 0 22px')};
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  a {
    text-decoration: none;
    color: rgb(${(props) => props.theme.palette.black});
  }
`;

Header.defaultProps = {};

export default Header;
