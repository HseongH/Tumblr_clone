// LIBRARY
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// REDUX
import { postActions } from '../redux/modules/post';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Grid, Image, Text } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';

// ICON
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ShowReacion = ({ count, postId }) => {
  const dispatch = useDispatch();

  const reactionList = useSelector((state) => state.post.reaction);

  const getReactionList = () => {
    dispatch(postActions.getReactionDB(postId));
  };

  return (
    <Dropdown
      icon={`반응 ${count}개`}
      color="black"
      width="300px"
      bgColor="white"
      callNext={getReactionList}
      position={() => {
        return css`
          bottom: -50px;
          left: 100px;
        `;
      }}
    >
      <Grid
        width="100%"
        height="53px"
        padding="14px 10px"
        addstyle={() => {
          return css`
            ${flexBox()};
          `;
        }}
      >
        반응 {count}개
      </Grid>

      <Grid
        width="100%"
        bgColor="secondaryAccent"
        addstyle={() => {
          return css`
            height: 300px;
            overflow: auto;
          `;
        }}
      >
        {reactionList.map((reaction) => {
          const type = reaction.type;

          return (
            <Grid
              width="100%"
              padding="7px 10px"
              key={(Date.now() + Math.random()).toString(36)}
              addstyle={() => {
                return css`
                  ${flexVer()};
                `;
              }}
            >
              <Grid
                width="30px"
                height="30px"
                addstyle={() => {
                  return css`
                    margin-right: 8px;
                    position: relative;

                    & svg {
                      padding: 3px;
                      border-radius: 50%;
                      position: absolute;
                      bottom: -3px;
                      right: -3px;
                      font-size: 10px;

                      ${({ theme }) => {
                        const palette = theme.palette;

                        return css`
                          color: rgb(${palette.white});
                          background: rgb(${type === 2 ? palette.green : palette.red});
                        `;
                      }}
                    }
                  `;
                }}
              >
                <Image
                  src={
                    reaction.profileImg
                      ? reaction.profileImg
                      : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'
                  }
                  alt="profile image"
                />

                {type === 2 ? <ShareIcon /> : <FavoriteIcon />}
              </Grid>

              <Text
                addstyle={() => {
                  return css`
                    font-size: 12px;
                    font-weight: 600;
                    width: calc(100% - 38px);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: left;
                  `;
                }}
              >
                {reaction.nickname}
              </Text>
            </Grid>
          );
        })}
      </Grid>
    </Dropdown>
  );
};

export default ShowReacion;
