// LIBRARY
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../redux/modules/user';

// HISTORY
import { history } from '../redux/configstore';

// STYLE
import { flexBox, flexVer } from '../common/style';

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

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <HeaderStyle>
        <HeaderWrap>
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
        </HeaderWrap>

        <Grid addStyle={flexVer}>
          <Grid
            addstyle={() => {
              return css`
                position: relative;
                ${flexBox()};

                & > button {
                  margin-right: 15%;

                  &:last-child {
                    margin-right: 0;
                  }

                  & a {
                    color: rgba(${(props) => props.theme.palette.white}, ${path === '/' ? 1 : 0.5});
                  }
                }
              `;
            }}
            width="80%"
            padding="0 2%"
            margin="0 0 0 10%"
          >
            <Button>
              <Link to="/">
                <HomeIcon fontSize="large" />
              </Link>
            </Button>

            <Alarm />

            <User opacity={path === '/mypage' ? '1' : '0.5'} />

            <Button padding="0 12px" bgColor="blue" color="black">
              <CreateIcon fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </HeaderStyle>
    );
  }

  return (
    <HeaderStyle>
      <HeaderWrap>
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
      </HeaderWrap>
      <Grid addStyle={flexVer}>
        <Grid
          addstyle={() => {
            return css`
              position: relative;
              ${flexBox()};

              & > button {
                margin-right: 15%;

                &:last-child {
                  margin-right: 0;
                }

                & a {
                  color: rgba(${(props) => props.theme.palette.white}, ${path === '/' ? 1 : 0.5});
                }
              }
            `;
          }}
          width="80%"
          padding="0 2%"
          margin="0 0 0 10%"
        >
          <Button
            clickEvent={() => {
              history.push('/signup');
            }}
            color="black"
            bgColor="blue"
            padding="10px 15px"
            margin="0 auto"
            addstyle={() => {
              return css`
                width: 60px;
                font-weight: bold;
              `;
            }}
          >
            가입
          </Button>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderWrap = styled.div`
  ${flexBox('left')};
  width: 100%;
  height: 54px;
`;

const HeaderStyle = styled.header`
  ${flexBox('space-between')};
  background: rgb(${(props) => props.theme.palette.navy});
  width: 100%;
  max-width: 1716px;
  padding: 0 20px 0 22px;
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
