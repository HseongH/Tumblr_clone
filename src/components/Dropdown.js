// LIBRARY
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// ELEMENTS
import { Button } from '../elements/index';

// STYLE
import { borderBox } from '../common/style';

// ICON
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const DropdownStyle = styled.div`
  ${(props) => {
    return css`
      width: ${props.width};
      background: rgb(${props.theme.palette.white});
      box-shadow: ${props.shadow};
      font-size: ${props.fontSize};
      ${borderBox(props.radius, props.padding)};
      ${props.position()};
      ${props.addstyle()};
    `;
  }};

  position: absolute;
  z-index: 9;
`;

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [alpha, setAlpha] = useState(props.opacity);

  const handleToggle = () => {
    setOpen((preOpen) => !preOpen);
    setAlpha(open ? props.opacity : 1);
  };

  const handleClose = () => {
    setOpen(false);
    setAlpha(props.opacity);
  };

  useEffect(() => {
    setAlpha(props.opacity);
  }, [props.opacity]);

  return (
    <>
      <Button
        clickEvent={() => {
          handleToggle();
          props.callNext();
        }}
        color={props.color}
        opacity={alpha}
      >
        {props.icon}
      </Button>

      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <DropdownStyle {...props}>{props.children}</DropdownStyle>
        </ClickAwayListener>
      )}
    </>
  );
};

Dropdown.defaultProps = {
  shadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  callNext: () => {},
  position: () => {},
  addstyle: () => {},
};

export default Dropdown;
