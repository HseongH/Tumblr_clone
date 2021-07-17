import React, { useState } from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// ICON
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const DropDownStyle = styled.ul`
  width: ${(props) => props.width};
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => `calc(100% - ${props.pos});`};
  padding: 10px 0;
  box-sizing: border-box;
  background: #fff;
  line-height: 2;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 9;
`;

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
          <Grid {...props}>{props.children}</Grid>
        </ClickAwayListener>
      )}
    </>
  );
};

Dropdown.defaultProps = {
  top: '48px',
  pos: '100%',
};

export default Dropdown;
