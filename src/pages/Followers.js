// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text, Input } from "../elements";

// COMPONENTS
import Permit from "../components/Permit";
import MyFollower from "../components/MyFollower";
import BlogUser from "../components/BlogUser";

// ICON

// REDUX
import { myPageActions } from "../redux/modules/mypage";

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
      <Grid
        margin="-4% 0 0 0"
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
          `;
        }}
      >
        <Grid
          width="100%"
          addstyle={() => {
            return css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `;
          }}
        >
          <Grid width="100%" margin="0 10% 5% 0">
            <Grid width="100%" margin="0 10% 0 0">
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
          </Grid>

          <Grid margin="10% 0 0 0">
            <BlogUser />
          </Grid>
        </Grid>
      </Grid>
    </Permit>
  );
};

export default Followers;
