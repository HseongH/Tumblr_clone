// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMETS
import { Grid, Button } from '../elements/index';

const Modal = ({ children, text, ...props }) => {
  return (
    <Grid>
      {children}
      <Grid
        appendStyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Button bgColor="gray" padding="5px 7px">
          닫기
        </Button>
        <Button bgColor="accent" padding="5px 7px">
          {text}
        </Button>
      </Grid>
    </Grid>
  );
};

Modal.propTypes = {};

export default Modal;
