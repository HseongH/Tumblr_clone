// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// ELEMENTS
import { Grid, Text } from '../elements';

// COMPONENTS
import BlogUser from '../components/BlogUser';
import Permit from '../components/Permit';
import MyFollowing from '../components/MyFollowing';

// REDUX
import { myPageActions } from '../redux/modules/mypage';

const Following = (props) => {
  const dispatch = useDispatch();

  const { followingList } = useSelector(
    (state) => ({
      followingList: state.mypage.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyFollowingDB());
  }, []);

  return (
    <Permit>
      <Grid>
        <Text fontSize="18px" color="white">
          팔로잉
        </Text>

        {followingList.map((following) => {
          return <MyFollowing post={following} key={(Date.now() + Math.random()).toString(36)} />;
        })}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default Following;
