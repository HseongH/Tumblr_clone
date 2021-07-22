// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Text } from '../elements';

// COMPONENTS
import Permit from '../components/Permit';
import MyFollower from '../components/MyFollower';
import BlogUser from '../components/BlogUser';

// ICON

// REDUX
import { myPageActions } from '../redux/modules/mypage';

const Followers = (props) => {
  const dispatch = useDispatch();

  const { followerList } = useSelector(
    (state) => ({
      followerList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyFollowerDB());

    return () => {
      dispatch(myPageActions.getMyPageFollower([], 0));
    };
  }, []);

  return (
    <Permit>
      <Grid>
        <Text fontSize="18px" color="white">
          팔로워
        </Text>

        {followerList.map((follower) => {
          return (
            <MyFollower
              post={follower}
              key={(Date.now() + Math.random()).toString(36)}
            ></MyFollower>
          );
        })}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default Followers;
