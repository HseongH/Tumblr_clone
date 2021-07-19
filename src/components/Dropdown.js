import React, { useState } from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// ICON
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((preOpen) => !preOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        clickEvent={handleToggle}
        width={props.width}
        height={props.height}
        bg={props.bg}
        color={props.color}
        fontSize={props.fontSize}
      >
        {props.icon}
      </Button>

      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <Grid
            padding="15px 20px"
            addstyle={() => {
              return css`
                position: absolute;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                z-index: 9;
                ${props.position()}
              `;
            }}
          >
            {props.children}
          </Grid>
        </ClickAwayListener>
      )}
    </>
  );
};

Dropdown.defaultProps = {
  top: '48px',
  pos: '100%',
  position: () => {},
};

export default Dropdown;
