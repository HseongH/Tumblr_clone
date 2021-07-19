// LIBRARY
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// COMPONENTS
import PostHeader from './PostHeader';
import Modal from './Modal';
import InputFile from './InputFile';

// ELEMENTS
import { Button, Grid, Text, Input } from '../elements';

// ICON
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ChatIcon from '@material-ui/icons/Chat';
import VideocamIcon from '@material-ui/icons/Videocam';

const TextAreaStyle = styled.textarea`
  width: 100%;
  min-height: 120px;
  font-size: 16px;
  resize: none;
  border: none;

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

const InputBox = (props) => {
  const [inputType, setInputType] = useState('');

  return (
    <>
      <Grid
        width="540px"
        padding="15px 5px"
        margin="0 0 20px"
        bgColor="white"
        addstyle={() => {
          flexBox('space-between');
          return css`
            position: relative;

            & > button {
              width: 50%;
            }
          `;
        }}
      >
        <Button
          color="black"
          clickEvent={() => {
            setInputType('text');
          }}
        >
          <TextFieldsIcon style={{ fontSize: '48px' }} />

          <Text>텍스트</Text>
        </Button>

        <Button
          color="red"
          clickEvent={() => {
            setInputType('image');
          }}
        >
          <CameraAltIcon style={{ fontSize: '48px' }} />

          <Text>사진</Text>
        </Button>

        {/* <Button color="orange">
          <FormatQuoteIcon style={{ fontSize: '48px' }} />

          <Text>인용구</Text>
        </Button>

        <Button color="blue">
          <ChatIcon style={{ fontSize: '48px' }} />

          <Text>채팅</Text>
        </Button>

        <Button color="pink">
          <VideocamIcon style={{ fontSize: '48px' }} />

          <Text>동영상</Text>
        </Button> */}
      </Grid>

      {inputType && (
        <Modal
          bgColor="white"
          cancle="닫기"
          submit="포스팅"
          color="white"
          padding="15px 0"
          modalClose={() => {
            setInputType('');
          }}
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

          {inputType === 'text' && (
            <Grid width="100%" padding="0 20px">
              <Input fontSize="30px" placeholder="제목" />

              <TextAreaStyle placeholder="여기에 내용을 쓰세요."></TextAreaStyle>
            </Grid>
          )}

          {inputType === 'image' && (
            <InputFile height="150px" margin="0 0 20px">
              사진 업로드
            </InputFile>
          )}
        </Modal>
      )}
    </>
  );
};

InputBox.defaultProps = {};

export default InputBox;
