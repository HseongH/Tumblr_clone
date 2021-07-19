// LIBRARY
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// STYLE
import { flexBox, flexVer, borderBox } from '../common/style';

// COMPONENTS
import Logo from './Logo';
import Dropdown from './Dropdown';
import Reaction from './Reaction';

// ELEMENTS
import { Input, Button, Grid, Image, Title, Text } from '../elements/index';

// ICON
import HomeIcon from '@material-ui/icons/Home';
import { FaBolt } from 'react-icons/fa';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const Header = (props) => {
  const path = useLocation().pathname;
  const [searchBar, setSearchBar] = useState({
    alpha: 0.3,
    color: 'white',
  });

  return (
    <HeaderStyle>
      <HeaderWrap>
        <Logo>
          <Image
            src="https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png"
            alt="tumblr logo"
          />
        </Logo>

        <Grid addstyle={flexVer} width="50%" bgColor="white" opacity={searchBar.alpha}>
          <Grid color={searchBar.color} width="20px" margin="0 4px">
            <SearchIcon fontSize="midium" />
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

          <Dropdown
            width="380px"
            icon={<FaBolt fontSize="30px" />}
            opacity="0.5"
            position={() => {
              return css`
                top: 54px;
                right: 0;
              `;
            }}
          >
            <Title
              fontSize="14px"
              addstyle={() => {
                return css`
                  ${borderBox('3px', '15px 20px 10px')};
                `;
              }}
            >
              hh4518
            </Title>

            <Grid
              width="100%"
              addstyle={() => {
                return css`
                  & > button {
                    width: 25%;
                    border-radius: 0;
                    padding: 10px 0;
                    ${({ theme }) => {
                      return css`
                        color: rgb(${theme.palette.black});
                        border-top: 1px solid rgb(${theme.palette.secondaryAccent});
                        border-bottom: 1px solid rgb(${theme.palette.secondaryAccent});
                      `;
                    }};
                  }
                `;
              }}
            >
              <Button>전체</Button>

              <Button>팔로우</Button>

              <Button>리블로그</Button>

              <Button>좋아요</Button>
            </Grid>

            <Grid
              width="100%"
              bgColor="secondaryAccent"
              padding="15px 20px"
              addstyle={() => {
                return css`
                  text-align: center;
                `;
              }}
            >
              <FaBolt />

              <Text fontSize="14px" lineHeight="1.5" margin="8px 0 0">
                팔로우, 리블로그, 좋아요를 보려면 포스팅할 때 이 탭을 확인하세요.
              </Text>
            </Grid>
          </Dropdown>

          <Dropdown
            width="240px"
            icon={<PersonIcon fontSize="large" />}
            opacity={path === '/mypage' ? '1' : '0.5'}
            position={() => {
              return css`
                top: 54px;
                right: 0;
              `;
            }}
          >
            <Grid width="100%">
              <Button
                width="100%"
                color="gray"
                fontSize="14px"
                bgColor="secondaryAccent"
                padding="10px 20px"
                addstyle={() => {
                  return css`
                    text-align: right;
                  `;
                }}
              >
                로그아웃
              </Button>

              <Reaction />

              <Grid
                width="100%"
                addstyle={() => {
                  return css`
                    & button {
                      width: 100%;
                      text-align: left;
                      padding: 10px 20px;
                      ${flexVer()};

                      ${({ theme }) => {
                        return css`
                          color: rgb(${theme.palette.black});

                          &:hover {
                            background: rgb(${theme.palette.secondaryAccent});
                          }
                        `;
                      }}

                      & svg {
                        margin-right: 7px;
                      }
                    }
                  `;
                }}
              >
                <Button>
                  <FindInPageIcon />
                  포스트
                </Button>

                <Button>
                  <PersonPinIcon />
                  팔로워
                </Button>

                <Button>
                  <PersonAddIcon />
                  팔로잉
                </Button>

                <Button>
                  <FavoriteIcon />
                  좋아요
                </Button>
              </Grid>
            </Grid>
          </Dropdown>

          <Button padding="0 12px" bgColor="blue" color="black">
            <CreateIcon fontSize="large" />
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
`;

Header.defaultProps = {};

export default Header;
