// LIBRARY
import React, { useState } from 'react';
import { css } from 'styled-components';

// STYLE
import { flexBox } from '../common/style';

// ELEMETS
import { Grid, Button, FixedBox } from '../elements/index';

const Modal = ({ children, cancle, submit, isVisible, ...props }) => {
  const [visible, setVisible] = useState(isVisible);
  console.log(visible);

  if (visible) {
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
              clickEvent={() => {
                setVisible(false);
              }}
            >
              {cancle}
            </Button>

            <Button
              color={props.color}
              fontSize={props.fontSize}
              bgColor="accent"
              padding="5px 7px"
            >
              {submit}
            </Button>
          </Grid>
        </Grid>
      </FixedBox>
    );
  }

  return null;
};

Modal.defaultProps = {};

export default Modal;
