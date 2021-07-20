import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid } from './index';

const FixedBox = ({ children }) => {
  return (
    <Grid
      bgColor="navy"
      opacity="0.9"
      width="100%"
      height="100vh"
      addstyle={() => {
        return css`
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 99;
        `;
      }}
    >
      {children}
    </Grid>
  );
};

export default FixedBox;
