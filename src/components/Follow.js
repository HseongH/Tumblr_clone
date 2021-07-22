import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { followActions } from '../redux/modules/follow';

// ELEMENTS
import { Button } from '../elements/index';

const Follow = ({ margin, isFollow, userId, callNext }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(isFollow);

  const curUserId = useSelector((state) => state.user.userId);

  const addFollow = () => {
    setVisible(false);
    dispatch(followActions.addFollowDB(userId));
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

Follow.defaultProps = {
  callNext: () => {},
};

export default Follow;
