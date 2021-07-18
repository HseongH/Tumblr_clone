// LIBRARY
import React from "react";
import styled, { css } from "styled-components";

// STYLE
import { flexBox } from "../common/style";

// COMPONENTS

// ELEMENTS
import { Button, Grid, Text } from "../elements";

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
        width="100%"
        appendStyle={() => {
          flexBox("space-between");
          return css`
            position: relative;
            justify-content: space-between;
            box-sizing: border-box;
            align-items: center;
            min-height: 100px;
            padding: 15px 5px;
            border-radius: 3px;
            margin-bottom: 20px;
            background-color: white;
            line-height: 100px;
          `;
        }}
      >
        <Button>
          <TextFieldsIcon style={{ fontSize: "48px", color: "black", margin: "0 40px 0 15px" }} />
          <Text margin="0 20px 0 0">텍스트</Text>
        </Button>

        <Button>
          <CameraAltIcon style={{ fontSize: "48px", color: "rgb(255, 73, 47)", marginRight: "40px" }} />
          <Text margin="0 40px 0 0">사진</Text>
        </Button>

        <Button>
          <FormatQuoteIcon style={{ fontSize: "48px", color: "rgb(255, 138, 0)", marginRight: "40px" }} />
          <Text margin="0 40px 0 0">인용구</Text>
        </Button>

        <Button>
          <ChatIcon style={{ fontSize: "48px", color: "rgb(0, 184, 255)", marginRight: "40px" }} />
          <Text margin="0 40px 0 0">채팅</Text>
        </Button>

        <Button>
          <VideocamIcon style={{ fontSize: "48px", color: "rgb(255, 98, 206)", marginRight: "20px" }} />
          <Text margin="0 20px 0 0">동영상</Text>
        </Button>
        
      </Grid>
    </React.Fragment>
  );
};

InputBox.defaultProps = {};

export default InputBox;
