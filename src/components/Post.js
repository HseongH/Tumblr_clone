// LIBRARY
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'styled-components';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// REDUX
import { postActions } from '../redux/modules/post';
import { imgActions } from '../redux/modules/image';
import { followActions } from '../redux/modules/follow';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Text, Title, Image, Grid, Button } from '../elements/index';

// COMPONENTS
import Like from './Like';
import Follow from './Follow';
import Dropdown from '../components/Dropdown';
import PostHeader from './PostHeader';
import PostingBox from './PostingBox';
import Auth from './Auth';
import ShowReacion from './ShowReacion';

// ICON
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const url = window.location.origin;

  const userId = useSelector((state) => state.user.userId);

  const [inputType, setInputType] = useState('');
  const [follow, setFollow] = useState(post.follow !== 'N');

  const addFollow = () => {
    dispatch(followActions.addFollowDB(post.userId));
  };

  const removeFollow = () => {
    dispatch(followActions.removeFollowDB(post.userId));
  };

  const updatePost = () => {
    setInputType(post.img.length ? 'image' : 'text');
    dispatch(imgActions.setPreview(post.img));
    dispatch(imgActions.setFile(post.img));
  };

  const deletePost = () => {
    dispatch(postActions.deletePostDB(post.postId));
  };

  const date = moment(post.createdAt).local().format('YY년 M월 D일, HH시 mm분');

  return (
    <>
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
          <Grid width="auto">
            <Grid
              width="64px"
              height="64px"
              bgColor="white"
              addstyle={() => {
                return css`
                  position: absolute;
                  top: 0;
                  left: -84px;
                  overflow: hidden;
                  background-image: ${post.profileImg
                    ? post.profileImg
                    : 'https://assets.tumblr.com/images/default_avatar/octahedron_open_128.png'};
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;
                `;
              }}
            ></Grid>
            {post.nickname}

            {follow || (
              <Follow
                userId={post.userId}
                margin="0 0 0 8px"
                isFollow={!follow}
                callNext={() => {
                  setFollow(true);
                }}
              />
            )}
          </Grid>

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
              {date}
            </Button>

            <CopyToClipboard text={`${url}?postId=${post.postId}&start=0&limit=10`}>
              <Button
                width="100%"
                color="black"
                padding="10px 0"
                fontWeight="700"
                addstyle={() => {
                  return css`
                    overflow: hidden;
                    position: relative;

                    &:hover {
                      background: rgb(${(props) => props.theme.palette.secondaryAccent});
                    }

                    &:after {
                      content: '';
                      background: rgb(${(props) => props.theme.palette.green});
                      display: block;
                      position: absolute;
                      padding-top: 300%;
                      padding-left: 350%;
                      margin-left: -20px !important;
                      margin-top: -120%;
                      opacity: 0;
                      transition: all 0.8s;
                    }

                    &:active:after {
                      padding: 0;
                      margin: 0;
                      opacity: 1;
                      transition: 0s;
                    }
                  `;
                }}
              >
                링크 복사
              </Button>
            </CopyToClipboard>

            {userId !== post.userId ? (
              <Button
                width="100%"
                color="black"
                padding="10px 0 15px"
                fontWeight="700"
                clickEvent={() => {
                  setFollow((follow) => !follow);
                  follow ? removeFollow() : addFollow();
                }}
                addstyle={() => {
                  return css`
                    &:hover {
                      background: rgb(${(props) => props.theme.palette.secondaryAccent});
                    }
                  `;
                }}
              >
                {follow ? '언팔로우' : '팔로우'}
              </Button>
            ) : null}
          </Dropdown>
        </PostHeader>

        <Title fontSize="1.625rem" margin="15px 0">
          {post.title}
        </Title>

        {post.img.map((img) => (
          <Image src={img} key={(Date.now() + Math.random()).toString(36)} />
        ))}

        <Text margin="15px 0">{post.content}</Text>

        {post.tag.length ? (
          <Grid
            width="100%"
            margin="0 0 15px"
            addstyle={() => {
              return css`
                line-height: 2;
              `;
            }}
          >
            {post.tag.map((tag, idx) => {
              return (
                <Button
                  key={(idx + Date.now() + Math.random()).toString(36)}
                  color="gray"
                  addstyle={() => {
                    return css`
                      margin-right: 12px;

                      &:last-child {
                        margin-right: 0;
                      }

                      &:hover {
                        text-decoration: underline;
                      }
                    `;
                  }}
                  clickEvent={() => {
                    window.location.href = `/search?keyword=${tag}`;
                  }}
                >
                  #{tag}
                </Button>
              );
            })}
          </Grid>
        ) : null}

        <Grid
          width="100%"
          addstyle={() => {
            return css`
              ${flexBox('space-between')};
            `;
          }}
        >
          <ShowReacion count={post.reactionCount} postId={post.postId} />

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
            <CopyToClipboard text={`${url}?postId=${post.postId}&start=0&limit=10`}>
              <Button
                color="black"
                addstyle={() => {
                  return css`
                    @keyframes selected {
                      from {
                        color: rgb(${(props) => props.theme.palette.green});
                      }

                      to {
                        color: rgb(${(props) => props.theme.palette.black});
                      }
                    }

                    &:focus {
                      animation: selected 0.8s;
                    }
                  `;
                }}
              >
                <FileCopyIcon />
              </Button>
            </CopyToClipboard>

            <Button color="black">
              <ShareIcon />
            </Button>

            {userId !== post.userId ? (
              <Like isFavorite={post.favorite === 'N' ? false : true} post={post} />
            ) : null}

            <Auth userId={post.userId}>
              <Button color="black" clickEvent={deletePost}>
                <DeleteIcon />
              </Button>

              <Button color="black" clickEvent={updatePost}>
                <CreateIcon />
              </Button>
            </Auth>
          </Grid>
        </Grid>
      </Grid>

      {inputType && (
        <PostingBox
          post={post}
          type={inputType}
          modalClose={() => {
            setInputType('');
          }}
        />
      )}
    </>
  );
};

export default Post;
