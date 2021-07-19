// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <HeaderStyle>
      <HeaderWrap>
        <Logo>
          <Image
            src="https://seeklogo.com/images/T/tumblr-icon-logo-A42B4BE5C1-seeklogo.com.png"
            alt="tumblr logo"
          />
        </Logo>
        <Grid addstyle={flexVer} width="50%" color="white" opacity="0.3">
          <span style={{ color: 'rgba(255, 255, 255, 0.5)', padding: '0 4px' }}>
            <SearchIcon fontSize="large" />
          </span>

          <Input placeholder="Tumblr 검색" />
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
                  color: rgba(${(props) => props.theme.palette.white}, 0.5);
                }
              }
            `;
          }}
          width="80%"
          padding="0 2%"
          margin="0 0 0 10%"
        >
          <Button opacity="0.5">
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
              color="secondaryAccent"
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
            opacity="0.5"
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
                    }
                  `;
                }}
              >
                <Button>
                  <FindInPageIcon style={{ marginRight: '7px' }} />
                  포스트
                </Button>

                <Button>
                  <PersonPinIcon style={{ marginRight: '7px' }} />
                  팔로워
                </Button>

                <Button>
                  <PersonAddIcon style={{ marginRight: '7px' }} />
                  팔로잉
                </Button>

                <Button>
                  <FavoriteIcon style={{ marginRight: '7px' }} />
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
