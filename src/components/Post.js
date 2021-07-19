// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Text, Title, Image, Grid, Button } from '../elements/index';

// COMPONENTS
import Dropdown from '../components/Dropdown';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const HeaderStyle = styled.article`
  ${flexBox('space-between')};
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 700;
`;

const Post = ({ post }) => {
  return (
    <Grid
      color="white"
      padding="15px 20px"
      margin="0 0 20px 0"
      addstyle={() => {
        return css`
          position: relative;
        `;
      }}
    >
      <HeaderStyle>
        hh4518{' '}
        <Dropdown
          width="250px"
          icon={<MoreHorizIcon />}
          color="gray"
          shadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
          position={() => {
            return css`
              top: 40px;
              right: -125px;
            `;
          }}
        >
          <Button
            width="100%"
            color="black"
            fontSize="14px"
            opacity="0.8"
            radius="0"
            padding="15px 0 10px"
            addstyle={() => {
              return css`
                border-bottom: 1px solid rgb(${(props) => props.theme.palette.gray});

                &:hover {
                  background: rgb(${(props) => props.theme.palette.secondaryAccent});
                }
              `;
            }}
          >
            포스팅함 - <span>7월 15일, 오전 10:22</span>
          </Button>

          <Button
            width="100%"
            color="black"
            padding="10px 0"
            fontWeight="700"
            fontSize="16px"
            addstyle={() => {
              return css`
                &:hover {
                  background: rgb(${(props) => props.theme.palette.secondaryAccent});
                }
              `;
            }}
          >
            링크 복사
          </Button>

          <Button
            width="100%"
            color="black"
            padding="10px 0 15px"
            fontWeight="700"
            fontSize="16px"
            addstyle={() => {
              return css`
                &:hover {
                  background: rgb(${(props) => props.theme.palette.secondaryAccent});
                }
              `;
            }}
          >
            언팔로우
          </Button>
        </Dropdown>
      </HeaderStyle>

      <Title fontSize="1.625rem" margin="15px 0"></Title>

      <Image />

      <Text margin="15px 0"></Text>

      <Grid
        width="100%"
        addstyle={() => {
          return css`
            ${flexBox('space-between')};
          `;
        }}
      >
        <Button
          color="black"
          addstyle={() => {
            return css`
              font-weight: 700;
            `;
          }}
        >
          반응 0개
        </Button>

        <Grid width="auto">
          <Button color="black" margin="0 15px 0 0">
            <FileCopyIcon />
          </Button>

          <Button color="black" margin="0 15px 0 0">
            <ShareIcon />
          </Button>

          <Button color="black">
            <FavoriteIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
