// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Text, Title, Image, Grid, Button } from '../elements/index';

// COMPONENTS
import Dropdown from '../components/Dropdown';
import PostHeader from './PostHeader';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Post = ({ post }) => {
  return (
    <Grid
      bgColor="white"
      padding="15px 20px"
      margin="0 0 20px 0"
      addstyle={() => {
        return css`
          position: relative;
        `;
      }}
    >
      <PostHeader>
        <Grid
          width="64px"
          height="64px"
          bgColor="white"
          addstyle={() => {
            return css`
              position: absolute;
              top: 0;
              left: -84px;
            `;
          }}
        >
          <Image />
        </Grid>
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
      </PostHeader>

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

        <Grid
          width="auto"
          addstyle={() => {
            return css`
              & button {
                margin-right: 15px;

                &:last-child {
                  margin-right: 0;
                }
              }
            `;
          }}
        >
          <Button color="black">
            <FileCopyIcon />
          </Button>

          <Button color="black">
            <ShareIcon />
          </Button>

          <Button color="black">
            <FavoriteIcon />
          </Button>

          <Button color="black">
            <DeleteIcon />
          </Button>

          <Button color="black">
            <CreateIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
