import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid } from './index';

// STYLE
import { flexBox } from '../common/style';

const FixedBox = ({ children }) => {
  return (
    <Grid
      color="navy"
      opacity="0.5"
      width="100%"
      appendStyle={() => {
        return css`
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99;
          ${flexBox()}
        `;
      }}
    >
      {children}
    </Grid>
  );
};

export default FixedBox;
