// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const InputStyle = styled.input`
  width: ${(props) => props.width};
  background: ${(props) => `rgba(${props.theme.palette.white}), .5`};
  color: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  border: none;
  ${borderBox()};

  &:focus {
    color: ${(props) => `rgb(${props.theme.palette.black})`};
    background: ${(props) => `rgb(${props.theme.palette.white})`};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => `rgb(${props.theme.palette.secondaryAccent})`};
  }

  &::-webkit-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.secondaryAccent})`};
  }

  &:-ms-input-placeholder {
    color: ${(props) => `rgb(${props.theme.palette.secondaryAccent})`};
  }

  ${(props) => props.appendStyle()};
`;

const Input = ({ placeholder, value, changeEvent, ...props }) => {
  return <InputStyle placeholder={placeholder} value={value} onChange={changeEvent} {...props} />;
};

Input.defaultProps = {
  color: 'white',
  width: '100%',
  fontSize: '16px',
  appendStyle: () => {},
  changeEvent: () => {},
};

export default Input;
