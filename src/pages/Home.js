// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Button } from '../elements/index';

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
        <TextFieldsIcon style={{ fontSize: '50px' }} />
      </Button>

      <Button color="red">
        <CameraAltIcon
          style={{ fontSize: '50px' }}
          addstyle={() => {
            return css`
              width: 50%;
            `;
          }}
        />
      </Button>
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
