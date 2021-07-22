// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  background: ${(props) => (props.bgColor ? `rgb(${props.theme.palette[props.bgColor]})` : 'none')};
  color: ${(props) => `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  border: none;
  cursor: pointer;
  ${(props) => borderBox(props.radius, props.padding)};

  &:disabled {
    opacity: 0.3;
  }

  ${(props) => props.addstyle()};
`;

const Button = ({ disabled, clickEvent, children, ...props }) => {
  return (
    <ButtonStyle disabled={disabled} onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  color: 'secondaryAccent',
  opacity: 1,
  fontSize: '16px',
  addstyle: () => {},
  clickEvent: () => {},
};

export default Button;
