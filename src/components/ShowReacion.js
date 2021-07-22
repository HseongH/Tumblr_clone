// LIBRARY
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';

// REDUX
import { postActions } from '../redux/modules/post';

// FUNCTION
import InfinityScroll from '../common/infinityScroll';

// STYLE
import { flexBox, flexVer } from '../common/style';

// ELEMENTS
import { Grid, Image, Text } from '../elements/index';

// COMPONENTS
import Dropdown from './Dropdown';

// ICON
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaBolt } from 'react-icons/fa';

const ShowReacion = ({ count, postId }) => {
  const dispatch = useDispatch();

  const reactionList = useSelector((state) => state.post.reaction);

  const reactionContainer = useRef();

  const getReactionList = () => {
    dispatch(postActions.getReactionDB(postId));
  };

  const getMoreReactionList = () => {
    dispatch(postActions.getMoreReactionDB(postId));
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
            font-weight: 700;
            ${flexBox()};
          `;
        }}
      >
        반응 {count}개
      </Grid>

      <Grid
        ref={reactionContainer}
        width="100%"
        bgColor="secondaryAccent"
        padding="10px 0"
        addstyle={() => {
          return css`
            max-height: 300px;
            overflow: auto;
          `;
        }}
      >
        {reactionList.length ? (
          reactionList.map((reaction, idx) => {
            const type = reaction.type;

            return (
              <InfinityScroll
                next={getMoreReactionList}
                index={idx}
                length={reactionList.length}
                root={reactionContainer.current}
                key={(reaction.userId * Date.now() + Math.random()).toString(36)}
              >
                <Grid
                  width="100%"
                  padding="7px 10px"
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
              </InfinityScroll>
            );
          })
        ) : (
          <Text fontSize="14px" lineHeight="1.5" margin="8px 0 0" textAlign="center">
            <FaBolt />
            <br />
            아직 아무런 반응이 없네요...
          </Text>
        )}
      </Grid>
    </Dropdown>
  );
};

export default ShowReacion;
