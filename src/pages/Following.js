// LIBRARY
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// STYLE
import { css } from 'styled-components';

// ELEMENTS
import { Grid, Text } from '../elements';

// COMPONENTS
import BlogUser from '../components/BlogUser';
import Permit from '../components/Permit';
import MyFollowing from '../components/MyFollowing';
import NoInfo from '../components/NoInfo';

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
          팔로잉
        </Text>

        {followingList.length ? (
          followingList.map((following) => {
            return <MyFollowing post={following} key={(Date.now() + Math.random()).toString(36)} />;
          })
        ) : (
          <NoInfo />
        )}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default Following;
