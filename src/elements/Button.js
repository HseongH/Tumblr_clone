// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const ButtonStyle = styled.button`
  background: ${(props) => (props.bgColor ? `rgb(${props.theme.palette[props.bgColor]})` : 'none')};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: none;
  cursor: pointer;
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.appendStyle()};
`;

const Button = ({ clickEvent, children, ...props }) => {
  return (
    <ButtonStyle onClick={clickEvent} {...props}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  color: 'secondaryAccent',
  fontSize: '16px',
  appendStyle: () => {},
  clickEvent: () => {},
};

export default Button;
