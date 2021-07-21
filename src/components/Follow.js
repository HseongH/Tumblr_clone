import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// REDUX
import { followActions } from '../redux/modules/follow';

// ELEMENTS
import { Button } from '../elements/index';

const Follow = ({ margin, isFollow, userId, callNext }) => {
  const [visible, setVisible] = useState(isFollow);

  const curUserId = useSelector((state) => state.user.userId);

  const addFollow = () => {
    setVisible(false);
    followActions.addFollowDB(userId);
    callNext();
  };

  if (visible && curUserId !== userId) {
    return (
      <Button color="accent" fontSize="14px" margin={margin} clickEvent={addFollow}>
        팔로우
      </Button>
    );
  }

  return null;
};

export default Follow;
