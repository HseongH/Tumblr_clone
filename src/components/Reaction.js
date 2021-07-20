// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// COMPONENTS
import Follow from './Follow';

// STYLE
import { flexBox } from '../common/style';

const Reaction = ({ children, isFollowed, ...props }) => {
  return (
    <Grid
      {...props}
      addstyle={() => {
        return css`
          ${flexBox('space-between')};
        `;
      }}
    >
      {children}

      <Follow />
    </Grid>
  );
};

Reaction.defaultProps = {
  padding: '8px 10px',
};

export default Reaction;
