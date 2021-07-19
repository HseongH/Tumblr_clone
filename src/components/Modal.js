// LIBRARY
import React, { useState } from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMETS
import { Grid, Button, FixedBox } from '../elements/index';

const Modal = ({ children, cancle, submit, modalClose, ...props }) => {
  return (
    <FixedBox>
      <Grid bgColor={props.bgColor} padding={props.padding}>
        {children}
        <Grid
          width="100%"
          padding="15px 20px 0"
          addstyle={() => {
            return css`
              ${flexBox('space-between')};
            `;
          }}
        >
          <Button
            color={props.color}
            fontSize={props.fontSize}
            bgColor="gray"
            padding="5px 7px"
            clickEvent={modalClose}
          >
            {cancle}
          </Button>

          <Button color={props.color} fontSize={props.fontSize} bgColor="accent" padding="5px 7px">
            {submit}
          </Button>
        </Grid>
      </Grid>
    </FixedBox>
  );
};

Modal.defaultProps = {};

export default Modal;
