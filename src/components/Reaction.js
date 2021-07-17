// LIBRARY
import React from 'react';

// ELEMENTS
import { Button, Grid } from '../elements/index';

// STYLE
import { flexBox } from '../common/style';

const Reaction = ({ children, ...props }) => {
  return (
    <Grid
      {...props}
      appendStyle={() => {
        flexBox('space-between');
      }}
    >
      <div>{children}</div>

      <Button color="accent">팔로우</Button>
    </Grid>
  );
};

Reaction.defaultProps = {
  padding: '8px 10px',
};

export default Reaction;
