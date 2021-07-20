// LIBRARY
import React from 'react';
import { css } from 'styled-components';

// ELEMENTS
import { Grid } from '../elements/index';

// COMPONENTS
import Follow from './Follow';

// STYLE
import { flexVer } from '../common/style';

const Reaction = ({ children, isFollowed, ...props }) => {
  return (
    <Grid
      {...props}
      addstyle={() => {
        return css`
          ${flexVer()};
        `;
      }}
    >
      {children}

      {isFollowed || <Follow />}
    </Grid>
  );
};

Reaction.defaultProps = {
  padding: '8px 10px',
};

export default Reaction;
