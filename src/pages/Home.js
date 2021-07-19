// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Button, Text } from '../elements/index';

// ICON
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const Home = (props) => {
  return (
    <Grid color="white" padding="15px 20px">
      <Button
        color="black"
        addstyle={() => {
          return css`
            width: 50%;
          `;
        }}
      >
        <TextFieldsIcon style={{ fontSize: '48px' }} />

        <Text>텍스트</Text>
      </Button>

      <Button
        color="red"
        addstyle={() => {
          return css`
            width: 50%;
          `;
        }}
      >
        <CameraAltIcon style={{ fontSize: '48px' }} />

        <Text>사진</Text>
      </Button>
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
