import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Button } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';
import Reaction from './Reaction';

// STYLE
import { flexVer } from '../common/style';

// ICON
import PersonIcon from '@material-ui/icons/Person';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const User = ({ opacity }) => {
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
  );
};

User.propTypes = {};

export default User;
