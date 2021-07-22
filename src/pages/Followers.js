// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// STYLE
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Text } from '../elements';

// COMPONENTS
import Permit from '../components/Permit';
import MyFollower from '../components/MyFollower';
import BlogUser from '../components/BlogUser';
import NoInfo from '../components/NoInfo';

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

  if (!followerList.length) return <NoInfo />;

  return (
    <Permit>
      <Grid
        margin="3% 0 0 0"
        addstyle={() => {
          return css`
            & > div {
              margin-bottom: 20px;

              &:last-child {
                margin-bottom: 0;
              }
            }
          `;
        }}
      >
        <Text fontSize="18px" color="white" margin="0 0 20px">
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
