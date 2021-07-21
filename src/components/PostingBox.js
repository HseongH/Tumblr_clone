// LIBRARY
import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled, { css } from 'styled-components';

// REDUX
import { imgActions } from '../redux/modules/image';
import { postActions } from '../redux/modules/post';

// STYLE
import { borderBox } from '../common/style';

// COMPONENTS
import PostHeader from './PostHeader';
import Modal from './Modal';
import InputFile from './InputFile';

// ELEMENTS
import { Button, Grid, Input, Image } from '../elements';

// ICON
import CloseIcon from '@material-ui/icons/Close';

const TextAreaStyle = styled.textarea`
  width: 100%;
  min-height: 120px;
  font-size: 16px;
  resize: none;
  border: none;
  ${(props) => borderBox(props.radius, props.padding)};
  margin-bottom: 15px;

  &::placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:-ms-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.gray})`};
  }

  &:focus {
    color: ${(props) => `rgb(${props.theme.palette.black})`};
    background: ${(props) => `rgb(${props.theme.palette.white})`};
    outline: none;

    &::placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }

    &::-webkit-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }

    &:-ms-input-placeholder {
      color: ${(props) => `rgb(${props.theme.palette.black})`};
    }
  }
`;

const PostingBox = ({ type, modalClose, post }) => {
  const dispatch = useDispatch();

  const { nickname, preview } = useSelector(
    (state) => ({
      preview: state.image.preview,
      nickname: state.user.nickname,
    }),
    shallowEqual
  );

  const [contents, setContents] = useState({
    title: post ? post.title : '',
    content: post ? post.content : '',
  });
  const [tagList, setTagList] = useState(post ? post.tag : []);

  const removeTag = (idx) => {
    const newTagList = tagList.filter((tag, index) => idx !== index);

    setTagList(newTagList);
  };

  const addTag = (event) => {
    setTagList([...tagList, event.target.value]);
    event.target.value = '';
  };

  const setInitialState = () => {
    setContents({ title: '', content: '' });
    setTagList([]);
    modalClose();
  };

  const createPost = () => {
    const postContents = {
      ...contents,
      tag: tagList,
      reBlog: null,
    };

    dispatch(postActions.createPostDB(postContents));
    setInitialState();
  };

  const updatePost = () => {
    const postContents = {
      ...post,
      ...contents,
    };

    dispatch(postActions.updatePostDB(post.postId, postContents));
    setInitialState();
  };

  const deletePreview = (idx) => {
    dispatch(imgActions.delPreview(idx));
    dispatch(imgActions.delFile(idx));
  };

  const selectFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        dispatch(imgActions.setPreview([reader.result]));
        dispatch(imgActions.setFile([file]));
      };
    }
  };

  if (!type) return null;

  return (
    <Modal
      bgColor="white"
      cancle="닫기"
      submit={post ? '저장' : '포스팅'}
      color="white"
      padding="15px 0"
      modalClose={() => {
        setInitialState();
        dispatch(imgActions.setInitialState());
      }}
      submitEvent={post ? updatePost : createPost}
    >
      <PostHeader
        addstyle={() => {
          return css`
            padding: 0 20px;
          `;
        }}
      >
        {nickname}
      </PostHeader>

      {type === 'image' && (
        <>
          {preview.length || contents.content ? (
            <>
              {preview.map((img, idx) => (
                <Grid
                  key={img.slice(10) + idx}
                  width="100%"
                  addstyle={() => {
                    return css`
                      position: relative;

                      & > button {
                        width: 20px;
                        height: 20px;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        border-radius: 50%;
                        display: none;
                      }

                      &:hover > button {
                        display: inline-block;
                      }
                    `;
                  }}
                >
                  <Image src={img} alt="preview" />

                  <Button
                    bgColor="red"
                    color="white"
                    clickEvent={() => {
                      deletePreview(idx);
                    }}
                  >
                    <CloseIcon style={{ fontSize: '12px', fontWeight: 700 }} />
                  </Button>
                </Grid>
              ))}

              {preview.length < 5 && (
                <InputFile changeEvent={selectFile} height="50px">
                  사진 업로드
                </InputFile>
              )}

              <Grid width="100%" padding="0 20px">
                {type === 'text' && (
                  <Input
                    fontSize="30px"
                    placeholder="제목"
                    value={contents.title}
                    changeEvent={(event) => {
                      setContents({ ...contents, title: event.target.value });
                    }}
                  />
                )}

                <TextAreaStyle
                  placeholder="여기에 내용을 쓰세요."
                  value={contents.content}
                  onChange={(event) => {
                    setContents({ ...contents, content: event.target.value });
                  }}
                ></TextAreaStyle>

                {tagList.map((tag, idx) => {
                  return (
                    <Button
                      key={(Date.now() + Math.random()).toString(36)}
                      color="gray"
                      padding="8px"
                      radius="10px"
                      addstyle={() => {
                        return css`
                          position: relative;

                          &:hover {
                            background: rgb(${(props) => props.theme.palette.follow});

                            svg {
                              display: inline-block;
                            }
                          }

                          & svg {
                            color: white;
                            font-size: 10px;
                            padding: 3px;
                            border-radius: 50%;
                            position: absolute;
                            top: -4px;
                            right: -4px;
                            background: rgb(${(props) => props.theme.palette.accent});
                            display: none;
                          }
                        `;
                      }}
                      clickEvent={() => {
                        removeTag(idx);
                      }}
                    >
                      #{tag}
                      <CloseIcon />
                    </Button>
                  );
                })}

                <Input
                  width="80px"
                  placeholder="#태그"
                  keyPress={(event) => {
                    if (event.key === 'Enter' && event.target.value) {
                      addTag(event);
                    }
                  }}
                />
              </Grid>
            </>
          ) : (
            <InputFile changeEvent={selectFile} height="150px">
              사진 업로드
            </InputFile>
          )}
        </>
      )}
    </Modal>
  );
};

export default PostingBox;
