// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// COMPONENTS

// ELEMENTS
import { Button, Grid, Text } from '../elements';

// ICON
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ChatIcon from '@material-ui/icons/Chat';
import VideocamIcon from '@material-ui/icons/Videocam';

const InputBox = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="540px"
        padding="15px 5px"
        margin="0 0 20px"
        bgColor="white"
        addstyle={() => {
          flexBox('space-between');
          return css`
            position: relative;

            & button {
              width: 50%;
            }
          `;
        }}
      >
        <Button color="black">
          <TextFieldsIcon style={{ fontSize: '48px' }} />

          <Text>텍스트</Text>
        </Button>

        <Button color="red">
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
    </React.Fragment>
  );
};

InputBox.defaultProps = {};

export default InputBox;
