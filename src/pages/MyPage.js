// LIBRARY
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// ELEMENTS
import { Grid } from "../elements";

// COMPONENTS
import InputBox from "../components/InputBox";
import Post from "../components/Post";
import Permit from "../components/Permit";
import BlogUser from "../components/BlogUser";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

// FUNCTION
import InfinityScroll from "../common/infinityScroll";

const MyPage = (post) => {
  const dispatch = useDispatch();

  const { myPostList, userId, nickname, profileImg } = useSelector(
    (state) => ({
      myPostList: state.mypage.list,
      userId: state.user.userId,
      nickname: state.user.nickname,
      profileImg: state.user.profileImg,
    }),
    shallowEqual
  );

  const getMoreMyPost = () => {
    dispatch(myPageActions.getMoreMyPostDB());
  };

  useEffect(() => {
    dispatch(myPageActions.getMyPostDB());
  }, []);

  if (myPostList.length && !myPostList[0].img) return null;

  return (
    <Permit>
      <Grid>
        <InputBox />

        {myPostList.map((post, idx) => {
          const postInfo = { ...post, userId, nickname, profileImg };
          return (
            <InfinityScroll
              next={getMoreMyPost}
              index={idx}
              length={myPostList.length}
              key={(Date.now() + Math.random()).toString(36)}
            >
              <Post post={postInfo} />
            </InfinityScroll>
          );
        })}
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default MyPage;
