// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid, Text } from "../elements";

// COMPONENTS
import BlogUser from "../components/BlogUser";
import Permit from "../components/Permit";
import MyFollowing from "../components/MyFollowing";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

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
        margin="6% 0 0 18%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
            max-width: 990px;
            padding: 0 8px;
            box-sizing: border-box;
            /* margin: 8% auto 0 auto; */
          `;
        }}
      >
        <Grid
          width="100%"
          margin="5% 0 0 -35%"
          addstyle={() => {
            return css`
              display: flex;
              flex-direction: column;
            `;
          }}
        >
          <Text fontSize="18px" color="white">
            팔로잉
          </Text>

          {followingList.map((following) => {
            return (
              <MyFollowing
                post={following}
                key={(Date.now() + Math.random()).toString(36)}
              />
            );
          })}
        </Grid>

        <Grid
          width="100%"
          addstyle={() => {
            return css`
              margin: -0% -50% 38px 25%;
              height: 300px;
            `;
          }}
        >
          <BlogUser />
        </Grid>
      </Grid>
    </Permit>
  );
};

export default Following;
