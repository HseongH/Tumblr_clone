// LIBRARY
import React, { useEffect } from "react";
import { css } from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { flexBox } from "../common/style";

// ELEMENTS
import { Grid } from "../elements";

// COMPONENTS
import Post from "../components/Post";
import BlogUser from "../components/BlogUser";
import Permit from "../components/Permit";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

const Likes = (props) => {
  const dispatch = useDispatch();

  const { likeList, userId, nickname, profileImg } = useSelector(
    (state) => ({
      likeList: state.mypage.likeList,
      userId: state.user.userId,
      nickname: state.user.nickname,
      profileImg: state.user.profileImg,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(myPageActions.getMyLikeDB());
  }, []);

  return (
    <Permit>
      <Grid
        width="100%"
        addstyle={() => {
          flexBox();
          return css`
            display: flex;
            max-width: 990px;
            padding: 0 8px;
            box-sizing: border-box;
            margin: 8% auto 0;
          `;
        }}
      >
        <Grid width="100%">
          <Grid
            width="100%"
            // bgColor="white"
            addstyle={() => {
              return css`
                max-width: 540px;
              `;
            }}
          >
            {likeList.map((like) => {
              const postInfo = { ...like, userId, nickname, profileImg };

              return (
                <Post
                  post={postInfo}
                  key={(Date.now() + Math.random()).toString(36)}
                />
              );
            })}
          </Grid>
        </Grid>

        <Grid
          width="100%"
          bgColor=""
          addstyle={() => {
            return css`
              margin: 0 -10% 38px 10%;
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

export default Likes;
