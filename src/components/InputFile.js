// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';

// ELEMENTS
import { Input, Grid } from '../elements/index';

// ICON
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const PosAbs = () => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
  `;
};

const LabelStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  box-sizing: border-box;
  z-index: 3;
  ${PosAbs()};

  ${(props) => {
    const color = props.theme.palette.gray;
    const bgColor = props.theme.palette.secondaryAccent;

    return css`
      color: rgb(${color});
      background: rgb(${bgColor});
      border-top: dashed rgb(${color});
      border-bottom: dashed rgb(${color});
      padding: ${props.padding};
    `;
  }}
`;

const InputImage = ({ children, changeEvent, ...props }) => {
  return (
    <Grid
      width="100%"
      height={props.height}
      addstyle={() => {
        return css`
          position: relative;
        `;
      }}
    >
      <LabelStyle {...props} htmlFor="input--file">
        <AddAPhotoIcon style={{ marginRight: '8px' }} />
        {children}
      </LabelStyle>

      <Input
        id="input--file"
        type="file"
        accept="image/png, image/jpeg"
        changeEvent={changeEvent}
        addstyle={() => {
          return css`
            display: none;
          `;
        }}
      />
    </Grid>
  );
};

export default InputImage;
