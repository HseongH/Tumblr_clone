import React, { useState } from 'react';

// REDUX
import { followActions } from '../redux/modules/follow';

// ELEMENTS
import { Button } from '../elements/index';

const Follow = ({ margin, isFollow, userId }) => {
  const [visible, setVisible] = useState(isFollow);

  const addFollow = () => {
    setVisible(false);
    followActions.addFollowDB(userId);
  };

  if (visible) {
    return (
      <Button color="accent" fontSize="14px" margin={margin} clickEvent={addFollow}>
        팔로우
      </Button>
    );
  }

  return null;
};

export default Follow;
