// LIBRARY
import React from 'react';
import { useDispatch } from 'react-redux';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';

// REDUX
import { userActions } from '../redux/modules/user';

// ELEMENTS
import { Grid, Button, Image } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';

// STYLE
import { flexVer, flexBox } from '../common/style';

// ICON
import PersonIcon from '@material-ui/icons/Person';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const User = ({ opacity, nickname, profile }) => {
  const dispatch = useDispatch();
  const url = window.location.origin;

  return (
    <Dropdown
      width="240px"
      icon={<PersonIcon fontSize="large" />}
      opacity={opacity}
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
          color="black"
          fontSize="14px"
          bgColor="secondaryAccent"
          padding="10px 20px"
          addstyle={() => {
            return css`
              text-align: right;
            `;
          }}
          clickEvent={() => {
            dispatch(userActions.logOut());
            window.location.replace(`${url}/login`);
          }}
        >
          로그아웃
        </Button>

        <Grid
          padding="8px 10px"
          width="100%"
          isFollowed={true}
          hoverColor="secondaryAccent"
          addstyle={() => {
            return css`
              ${flexVer()};
            `;
          }}
        >
          <Link to="/mypage">
            <Grid
              color="black"
              addstyle={() => {
                return css`
                  ${flexBox('left')};
                  flex: 1;
                `;
              }}
            >
              <Grid width="37px" height="37px" oveflow="hidden" margin="0 12px 0 0">
                <Image
                  src={
                    profile
                      ? profile
                      : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'
                  }
                  alt="default image"
                />
              </Grid>

              <strong>{nickname}</strong>
            </Grid>
          </Link>
        </Grid>

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
          <Link to="/mypage">
            <Button>
              <FindInPageIcon />
              포스트
            </Button>
          </Link>

          <Link to="/followers">
            <Button>
              <PersonPinIcon />
              팔로워
            </Button>
          </Link>

          <Link to="/following">
            <Button>
              <PersonAddIcon />
              팔로잉
            </Button>
          </Link>

          <Link to="/likes">
            <Button>
              <FavoriteIcon />
              좋아요
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Dropdown>
  );
};

User.propTypes = {};

export default User;
