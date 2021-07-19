// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Button, Grid } from '../elements/index';

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

      {isFollowed || <Button color="accent">팔로우</Button>}
    </Grid>
  );
};

Reaction.defaultProps = {
  padding: '8px 10px',
};

export default Reaction;
