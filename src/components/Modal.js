// LIBRARY
import React, { useState } from 'react';

// STYLE
import { flexBox } from '../common/style';

// ELEMETS
import { Grid, Button, FixedBox } from '../elements/index';

const Modal = ({ children, cancle, submit, isVisible, color, bgColor, fontSize }) => {
  const [visible, setVisible] = useState(isVisible);

  if (visible) {
    return (
      <FixedBox>
        <Grid color={bgColor}>
          {children}
          <Grid
            appendStyle={() => {
              flexBox('space-between');
            }}
          >
            <Button
              color={color}
              fontSize={fontSize}
              bgColor="gray"
              padding="5px 7px"
              clickEvent={() => {
                setVisible(false);
              }}
            >
              {cancle}
            </Button>
            <Button color={color} fontSize={fontSize} bgColor="accent" padding="5px 7px">
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
