// LIBRARY
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const PostingBox = ({ type, modalClose }) => {
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.image.preview);

  const [contents, setContents] = useState({
    title: '',
    content: '',
  });

  const createPost = () => {
    const postContents = {
      ...contents,
      tag: [],
      reBlog: null,
    };

    dispatch(postActions.createPostDB(postContents));
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
        dispatch(imgActions.setPreview(reader.result));
        dispatch(imgActions.setFile(file));
      };
    }
  };

  return (
    <Modal
      bgColor="white"
      cancle="닫기"
      submit="포스팅"
      color="white"
      padding="15px 0"
      modalClose={modalClose}
      submitEvent={createPost}
    >
      <PostHeader
        addstyle={() => {
          return css`
            padding: 0 20px;
          `;
        }}
      >
        hh4518
      </PostHeader>

      {type === 'text' && (
        <Grid width="100%" padding="0 20px">
          <Input
            fontSize="30px"
            placeholder="제목"
            value={contents.title}
            changeEvent={(event) => {
              setContents({ ...contents, title: event.target.value });
            }}
          />

          <TextAreaStyle
            placeholder="여기에 내용을 쓰세요."
            value={contents.content}
            changeEvent={(event) => {
              setContents({ ...contents, content: event.target.value });
            }}
          ></TextAreaStyle>
        </Grid>
      )}

      {type === 'image' && (
        <>
          {preview.length ? (
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

              <TextAreaStyle
                padding="8px"
                placeholder="여기에 내용을 쓰세요."
                value={contents.content}
                changeEvent={(event) => {
                  setContents({ ...contents, content: event.target.value });
                }}
              ></TextAreaStyle>
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