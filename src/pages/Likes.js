// LIBRARY
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// STYLE
import { css } from "styled-components";

// ELEMENTS
import { Grid, Text } from "../elements";

// COMPONENTS
import Post from "../components/Post";
import BlogUser from "../components/BlogUser";
import Permit from "../components/Permit";
import NoInfo from "../components/NoInfo";

// REDUX
import { myPageActions } from "../redux/modules/mypage";

// FUNCTION
import InfinityScroll from "../common/infinityScroll";

const Likes = (props) => {
  const dispatch = useDispatch();

  const { likeList } = useSelector(
    (state) => ({
      likeList: state.mypage.list,
    }),
    shallowEqual
  );

  const getMoreLike = () => {
    dispatch(myPageActions.getMoreMyLikeDB());
  };

  useEffect(() => {
    dispatch(myPageActions.getMyLikeDB());
  }, []);

  if (likeList.length && !likeList[0].img) return null;

  return (
    <Permit>
      <Grid>
        {likeList.map((like, idx) => (
          <InfinityScroll
            next={getMoreLike}
            index={idx}
            length={likeList.length}
            key={(Date.now() + Math.random()).toString(36)}
          >
            <Post post={like} />
          </InfinityScroll>
        ))}

        <Grid width="100%" margin="0 0 0 0">
          <NoInfo />
          <Text
            color="gray"
            fontSize="32px"
            fontWeight="bold"
            addstyle={() => {
              return css`
                position: absolute;
                /* top: 70%;
                left: 21%; */
              `;
            }}
          >
            
          </Text>
        </Grid>
      </Grid>

      <BlogUser />
    </Permit>
  );
};

export default Likes;
