// LIBRARY
import React, { useState } from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMENTS
import { Button, Grid, Text } from '../elements';

// COMPONENTS
import PostingBox from './PostingBox';

// ICON
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

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
      </Grid>

      {inputType && (
        <PostingBox
          type={inputType}
          modalClose={() => {
            setInputType('');
          }}
        />
      )}
    </>
  );
};

InputBox.defaultProps = {};

export default InputBox;
