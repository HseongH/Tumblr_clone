// LIBRARY
import React from 'react';
import styled from 'styled-components';

// ELEMENTS
import { Image, Button } from '../elements/index';

// STYLE
import { flexBox, borderBox } from '../common/style';

const Reaction = ({ children, ...props }) => {
  return (
    <ReactionStyle {...props}>
      <div>
        <Image />
        {children}
      </div>

      <Button color="accent">팔로우</Button>
    </ReactionStyle>
  );
};

const ReactionStyle = styled.div`
  ${flexBox('space-between')};
  ${(props) => borderBox(props.radius, props.padding)};
`;

Reaction.defaultProps = {
  padding: '8px 10px',
};

export default Reaction;
