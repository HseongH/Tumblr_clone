// LIBRARY
import React, { useState } from 'react';

// STYLE
import { flexBox } from '../common/style';

// ELEMETS
import { Grid, Button } from '../elements/index';

const Modal = ({ children, text, isVisible, ...props }) => {
  const [visible, setVisible] = useState(false);

  if (visible) {
    return (
      <Grid>
        {children}
        <Grid
          appendStyle={() => {
            flexBox('space-between');
          }}
        >
          <Button
            bgColor="gray"
            padding="5px 7px"
            clickEvent={() => {
              setVisible(false);
            }}
          >
            닫기
          </Button>
          <Button bgColor="accent" padding="5px 7px">
            {text}
          </Button>
        </Grid>
      </Grid>
    );
  }

  return null;
};

Modal.propTypes = {};

export default Modal;
